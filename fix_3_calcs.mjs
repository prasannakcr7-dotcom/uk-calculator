import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');

const targetFiles = [
  "TuitionFeeLoanInterestCompoundingEstimator.astro",
  "BuyToLetStampDutySurchargeCalculator.astro",
  "CapitalRepaymentMortgageCalculator.astro"
];

targetFiles.forEach(file => {
  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
  }

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  let scriptBlock = '';
  body = body.replace(/<script[\s\S]*?<\/script>/gi, (m) => {
    scriptBlock += m + '\n';
    return '';
  });

  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');

  body = body.replace(/<div[^>]*class=["'][^"']*layout[^"']*["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']main-col["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']side-col["'][^>]*>[\s\S]*?<\/div>/gi, '');
  body = body.replace(/<slot\s*\/?>/gi, '');

  body = body.replace(/class=["']calculator-container["']/gi, '');
  body = body.replace(/class=["']calculator-card["']/gi, 'class="card"');
  body = body.replace(/class=["']input-group["']/gi, 'class="field-group"');
  body = body.replace(/<label\s+for="([^"]+)">([^<]+)<\/label>/gi, '<div class="field-label"><span>$2</span></div>');
  body = body.replace(/class=["'](results-card|results-box)["']/gi, 'class="card breakdown-card"');
  body = body.replace(/class=["']result-item highlight["']/gi, 'class="breakdown-row net"');
  body = body.replace(/class=["']result-item["']/gi, 'class="breakdown-row"');
  body = body.replace(/<button[^>]*class=["']calc-button["'][^>]*>.*?<\/button>/gi, '');

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

  const categoryClass = file.includes('Stamp') || file.includes('Mortgage') ? 'housing-category' : 'work-category';

  const cleanBody = `
<div class="layout calculator-layout ${categoryClass}">
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
  console.log(`Fixed structure for ${file}`);
});
