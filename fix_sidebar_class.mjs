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

  // Replace class="side-col" with class="sidebar"
  if (code.includes('class="side-col"') || code.includes("class='side-col'")) {
    code = code.replace(/class=["']side-col["']/g, 'class="sidebar"');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, code, 'utf8');
    fixedCount++;
  }
});

console.log(`Updated class="sidebar" for ${fixedCount} components.`);
