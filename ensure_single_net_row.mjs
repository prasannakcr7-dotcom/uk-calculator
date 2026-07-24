import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const astroFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let fixedCount = 0;

astroFiles.forEach(file => {
  if (excludeList.includes(file)) return;

  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Split frontmatter and body
  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Fix breakdown card inner HTML structure
  body = body.replace(/<div[^>]*class=["'][^"']*breakdown-card[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi, (match, innerContent) => {
    let inner = innerContent;

    // Check if breakdown-list wrapper is missing
    const hasListWrapper = inner.includes('class="breakdown-list"');

    // Extract title (h2 or h3)
    let titleHtml = '';
    inner = inner.replace(/<h[23][^>]*>(.*?)<\/h[23]>/i, (m) => {
      titleHtml = m;
      return '';
    });

    // Replace multiple breakdown-row net occurrences except the last one
    const rows = [];
    const rowRegex = /<div[^>]*class=["']breakdown-row(\s+net)?["'][^>]*>([\s\S]*?)<\/div>/gi;
    let m;
    while ((m = rowRegex.exec(inner)) !== null) {
      rows.push({ full: m[0], isNet: !!m[1], content: m[2] });
    }

    if (rows.length > 0) {
      modified = true;
      let newRowsHtml = '';
      rows.forEach((row, idx) => {
        const isLast = idx === rows.length - 1;
        const rowClass = isLast ? 'breakdown-row net' : 'breakdown-row';
        newRowsHtml += `\n        <div class="${rowClass}">${row.content}</div>`;
      });

      return `<div class="card breakdown-card">
      ${titleHtml}
      <div class="breakdown-list">${newRowsHtml}
      </div>
    </div>`;
    }

    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, frontmatter + body, 'utf8');
    fixedCount++;
  }
});

console.log(`Cleaned breakdown list structure and single net row for ${fixedCount} components.`);
