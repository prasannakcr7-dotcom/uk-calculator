import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let totalComp = 0;
let doneComp = 0;
let unRefactoredFiles = [];

files.forEach(file => {
  if (excludeList.includes(file)) return;
  totalComp++;

  const content = fs.readFileSync(path.join(compDir, file), 'utf8');

  // Check if component has sidebar category prop and breakdown-list
  const isDone = content.includes('<Sidebar category=') && content.includes('class="breakdown-list"');
  if (isDone) {
    doneComp++;
  } else {
    unRefactoredFiles.push(file);
  }
});

console.log(`TOTAL CALCULATORS: ${totalComp}`);
console.log(`COMPLETED & VERIFIED: ${doneComp}`);
console.log(`REMAINING TO REFACTOR: ${unRefactoredFiles.length}`);
console.log(`NEXT 10 TO REFACTOR:\n`, unRefactoredFiles.slice(0, 10));
