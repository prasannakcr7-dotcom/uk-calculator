import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

// Read original 103 audit list or identify components missing layout/sidebar category/breakdown-list
const affectedList = [];

files.forEach(f => {
  if (['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro', 'BaseHead.astro'].includes(f)) return;
  const content = fs.readFileSync(path.join(compDir, f), 'utf8');

  // A component still needs fixing if it does NOT have an explicit <Sidebar category= prop
  // or if it still has old class="side-col" instead of class="sidebar"
  // or if breakdown-list is missing
  const needsFix = !content.includes('<Sidebar category=') || content.includes('class="side-col"') || !content.includes('class="breakdown-list"');
  
  if (needsFix) {
    affectedList.push(f);
  }
});

console.log(`STILL NEEDING FIX: ${affectedList.length}`);
console.log(`FIRST 10 UNFIXED:\n`, JSON.stringify(affectedList.slice(0, 10), null, 2));
