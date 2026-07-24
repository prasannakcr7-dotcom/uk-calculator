import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let updatedCount = 0;

files.forEach(file => {
  if (excludeList.includes(file)) return;

  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // 1. Ensure Sidebar import exists in frontmatter
  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
    modified = true;
  }

  // Split frontmatter and HTML template
  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let html = parts.slice(2).join('---');

  // Check if component already uses <div class="layout
  if (!html.includes('class="layout') && !html.includes("class='layout") && !html.includes('class="layout ')) {
    modified = true;

    // Remove redundant leading <h2> / <h3> and <p class="calc-desc/hint">
    html = html.replace(/<h[23][^>]*>(.*?)<\/h[23]>\s*(<p[^>]*>.*?<\/p>)?/i, (match, title, desc) => {
      // Only remove if it looks like a main page title duplicate
      if (title.toLowerCase().includes('calculator') || title.toLowerCase().includes('pay') || title.toLowerCase().includes('tax') || title.toLowerCase().includes('ssp') || title.toLowerCase().includes('smp') || title.toLowerCase().includes('allowance')) {
        return '';
      }
      return match;
    });

    // Clean up inline styles on breakdown-row net
    html = html.replace(/class="breakdown-row net"[^>]*>/g, 'class="breakdown-row net">');

    // Wrap in standard 2-column layout grid
    html = `
<div class="layout calculator-layout work-category">
  <div class="main-col">
    ${html.trim()}
    <slot />
  </div>
  <div class="side-col">
    <Sidebar />
  </div>
</div>
`;

    // Remove duplicate <slot /> if present in original html
    const slotMatches = html.match(/<slot\s*\/?>/g);
    if (slotMatches && slotMatches.length > 1) {
      let firstSlotFound = false;
      html = html.replace(/<slot\s*\/?>/g, (m) => {
        if (!firstSlotFound) {
          firstSlotFound = true;
          return m;
        }
        return '';
      });
    }
  }

  // Remove restrictive max-width from component style block
  if (code.includes('max-width: 700px') || code.includes('max-width: 600px') || code.includes('max-width: 800px')) {
    code = code.replace(/max-width:\s*\d+px;/g, 'width: 100%;');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, frontmatter + html, 'utf8');
    updatedCount++;
  }
});

console.log(`Successfully refactored ${updatedCount} components to standard 2-column sidebar layout.`);
