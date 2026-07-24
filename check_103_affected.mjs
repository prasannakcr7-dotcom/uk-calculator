import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const affectedFiles = [];

files.forEach(f => {
  if (['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro', 'BaseHead.astro'].includes(f)) return;
  
  const content = fs.readFileSync(path.join(compDir, f), 'utf8');
  
  // A calculator has issues IF:
  // 1. Missing explicit <Sidebar category= prop
  // 2. Uses old class="side-col" instead of class="sidebar"
  // 3. Missing class="breakdown-list" wrapper
  const needsFix = !content.includes('<Sidebar category=') || content.includes('class="side-col"') || !content.includes('class="breakdown-list"');
  
  if (needsFix) {
    affectedFiles.push(f);
  }
});

console.log(`TOTAL AFFECTED CALCULATORS THAT NEED FIXING: ${affectedFiles.length}`);
console.log(`FULL LIST OF AFFECTED FILES:\n`, JSON.stringify(affectedFiles, null, 2));
