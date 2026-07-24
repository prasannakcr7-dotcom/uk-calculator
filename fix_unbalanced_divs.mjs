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

  // Ensure Sidebar import
  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
  }

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Extract <script> and <style> blocks
  let scriptBlock = '';
  body = body.replace(/<script[\s\S]*?<\/script>/gi, (m) => {
    scriptBlock += m + '\n';
    return '';
  });

  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Strip existing <div class="layout...">, <div class="main-col">, <div class="side-col">...</div></div>
  body = body.replace(/<div[^>]*class=["'][^"']*layout[^"']*["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']main-col["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']side-col["'][^>]*>[\s\S]*?<\/div>/gi, '');
  body = body.replace(/<slot\s*\/?>/gi, '');

  // Remove trailing unclosed extra </div> tags at bottom of template
  // Sanitize inner HTML tags
  body = body.replace(/class=["']calculator-container["']/gi, '');
  body = body.replace(/class=["']calculator-card["']/gi, 'class="card"');
  body = body.replace(/class=["']input-group["']/gi, 'class="field-group"');
  body = body.replace(/<label\s+for="([^"]+)">([^<]+)<\/label>/gi, '<div class="field-label"><span>$2</span></div>');
  body = body.replace(/class=["'](results-card|results-box)["']/gi, 'class="card breakdown-card"');
  body = body.replace(/class=["']result-item highlight["']/gi, 'class="breakdown-row net"');
  body = body.replace(/class=["']result-item["']/gi, 'class="breakdown-row"');
  body = body.replace(/<button[^>]*class=["']calc-button["'][^>]*>.*?<\/button>/gi, '');

  // Balance div tags inside body
  let opens = (body.match(/<div[\s>]/gi) || []).length;
  let closes = (body.match(/<\/div>/gi) || []).length;

  while (closes > opens && body.lastIndexOf('</div>') !== -1) {
    const idx = body.lastIndexOf('</div>');
    body = body.slice(0, idx) + body.slice(idx + 6);
    closes--;
  }

  while (opens > closes) {
    body += '\n</div>';
    closes++;
  }

  // Construct clean outer template grid
  const cleanBody = `
<div class="layout calculator-layout work-category">
  <div class="main-col">
    ${body.trim()}
    <slot />
  </div>
  <div class="side-col">
    <Sidebar />
  </div>
</div>

${scriptBlock.trim()}
`;

  fs.writeFileSync(filePath, frontmatter + cleanBody, 'utf8');
  fixedCount++;
});

console.log(`Reconstructed clean 2-column layout grid for ${fixedCount} components.`);
