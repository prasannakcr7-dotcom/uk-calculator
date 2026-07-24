import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let fixedCount = 0;

files.forEach(file => {
  if (excludeList.includes(file)) return;

  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Split frontmatter and HTML body
  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let html = parts.slice(2).join('---');

  // Fix 1: Ensure <slot /> is NOT inside breakdown-card or card
  // Remove all existing <slot /> tags
  if (html.includes('<slot') || html.includes('<slot/>') || html.includes('<slot />')) {
    html = html.replace(/<slot\s*\/?>/gi, '');
    modified = true;
  }

  // Ensure amount-field wrapper around standalone inputs inside field-group
  html = html.replace(/(<div class="field-group">[\s\S]*?<div class="field-label">[\s\S]*?<\/div>\s*)(<input[^>]*type=["'](number|text)["'][^>]*>)/gi, (match, prefix, inputStr) => {
    if (!prefix.includes('amount-field')) {
      return `${prefix}<div class="amount-field">${inputStr}</div>`;
    }
    return match;
  });

  // Remove standalone custom blue buttons if live input handling is available or map to calc-btn
  html = html.replace(/<button[^>]*class=["']calc-button["'][^>]*>.*?<\/button>/gi, '');

  // Ensure <slot /> is placed right before </div> closing main-col
  if (html.includes('<div class="main-col">')) {
    html = html.replace(/(<\/div>\s*<div class="side-col">)/i, `  <slot />\n  </div>\n  <div class="side-col">`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, frontmatter + html, 'utf8');
    fixedCount++;
  }
});

console.log(`Cleaned slot placement and input styling for ${fixedCount} components.`);
