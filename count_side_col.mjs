import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let count = 0;
const affectedFiles = [];

files.forEach(file => {
  if (excludeList.includes(file)) return;
  const filePath = path.join(compDir, file);
  const code = fs.readFileSync(filePath, 'utf8');

  if (code.includes('class="side-col"') || code.includes("class='side-col'")) {
    count++;
    affectedFiles.push(file);
  }
});

console.log(`TOTAL CALCULATORS WITH SIDEBAR CLASS ISSUE: ${count}`);
console.log(JSON.stringify(affectedFiles, null, 2));
