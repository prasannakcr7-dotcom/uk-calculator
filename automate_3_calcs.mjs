import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');

const targetFiles = [
  "RentVsBuyCalculator.astro",
  "FirstTimeBuyerStampDutyCalculator.astro",
  "RentalYieldCalculator.astro"
];

targetFiles.forEach(file => {
  const filePath = path.join(compDir, file);
  if (!fs.existsSync(filePath)) return;

  let code = fs.readFileSync(filePath, 'utf8');

  // Ensure Sidebar import
  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
  }

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Preserve script blocks
  let scriptBlock = '';
  body = body.replace(/<script[\s\S]*?<\/script>/gi, (m) => {
    scriptBlock += m + '\n';
    return '';
  });

  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Strip layout wrapper tags
  body = body.replace(/<div[^>]*class=["'][^"']*layout[^"']*["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']main-col["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["'](side-col|sidebar)["'][^>]*>[\s\S]*?<\/div>/gi, '');
  body = body.replace(/<slot\s*\/?>/gi, '');

  // Clean form control containers & labels
  body = body.replace(/class=["']calculator-container["']/gi, '');
  body = body.replace(/class=["']calculator-card["']/gi, 'class="card"');
  body = body.replace(/class=["']input-group["']/gi, 'class="field-group"');
  body = body.replace(/<label\s+for="([^"]+)">([^<]+)<\/label>/gi, '<div class="field-label"><span>$2</span></div>');

  // Clean breakdown cards and ensure single net row inside breakdown-list
  const rowRegex = /<div[^>]*class=["']breakdown-row(\s+net)?["'][^>]*>([\s\S]*?)<\/div>/gi;
  const rows = [];
  let m;
  while ((m = rowRegex.exec(body)) !== null) {
    rows.push({ full: m[0], content: m[2] });
  }

  if (rows.length > 0) {
    let newRowsHtml = '';
    rows.forEach((row, idx) => {
      const isLast = idx === rows.length - 1;
      const rowClass = isLast ? 'breakdown-row net' : 'breakdown-row';
      newRowsHtml += `\n        <div class="${rowClass}">${row.content}</div>`;
    });

    body = body.replace(/<div[^>]*class=["']card breakdown-card["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/i, () => {
      return `<div class="card breakdown-card" id="results-card">
      <h2>Calculation Breakdown</h2>
      <div class="breakdown-list">${newRowsHtml}
      </div>
    </div>`;
    });
  }

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

  // Construct clean outer template grid with class="sidebar"
  const cleanBody = `
<div class="layout calculator-layout housing-category">
  <div class="main-col">
    ${body.trim()}
    <slot />
  </div>
  <div class="sidebar">
    <Sidebar />
  </div>
</div>

${scriptBlock.trim()}
`;

  fs.writeFileSync(filePath, frontmatter + cleanBody, 'utf8');
  console.log(`Automated pattern fix applied for ${file}`);
});
