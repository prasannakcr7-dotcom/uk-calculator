import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const affectedSet = new Set();

files.forEach(f => {
  if (['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro', 'BaseHead.astro'].includes(f)) return;
  const content = fs.readFileSync(path.join(compDir, f), 'utf8');

  // Check HTML body (after second ---)
  const parts = content.split('---');
  const htmlPart = parts.length >= 3 ? parts.slice(2).join('---') : content;

  // 1. Missing outer layout container class="layout
  const missingLayout = !htmlPart.includes('class="layout') && !htmlPart.includes("class='layout") && !htmlPart.includes('class="layout ');

  // 2. Uses old class="side-col" instead of class="sidebar"
  const oldSideCol = htmlPart.includes('class="side-col"') || htmlPart.includes("class='side-col'");

  // 3. Missing explicit Sidebar category prop
  const missingSidebarCategory = !htmlPart.includes('<Sidebar category=');

  if (missingLayout || oldSideCol || missingSidebarCategory) {
    affectedSet.add(f);
  }
});

const affectedList = Array.from(affectedSet);
console.log(`EXACT COUNT OF AFFECTED CALCULATORS THAT NEED FIXING: ${affectedList.length}`);
console.log(JSON.stringify(affectedList, null, 2));
