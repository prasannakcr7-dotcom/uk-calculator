import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');

const targetFiles = [
  "CapitalRepaymentMortgageCalculator.astro",
  "BuyToLetStampDutySurchargeCalculator.astro",
  "CompanyCarTaxBikCalculator.astro",
  "StatutoryMaternityPaySmpEligibilityCalculator.astro",
  "CryptoTaxCalculatorHmrcRules.astro"
];

targetFiles.forEach(file => {
  const filePath = path.join(compDir, file);
  if (!fs.existsSync(filePath)) return;

  let code = fs.readFileSync(filePath, 'utf8');

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Replace multiple breakdown-row net occurrences except the last one
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

    body = body.replace(/<div[^>]*class=["']card breakdown-card["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/i, (match) => {
      return `<div class="card breakdown-card" id="results-card">
      <h2>Calculation Breakdown</h2>
      <div class="breakdown-list">${newRowsHtml}
      </div>
    </div>`;
    });
  }

  fs.writeFileSync(filePath, frontmatter + body, 'utf8');
  console.log(`Updated breakdown structure for ${file}`);
});
