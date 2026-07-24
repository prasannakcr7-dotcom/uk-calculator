import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

const brokenComponents = [];
const correctComponents = [];

files.forEach(file => {
  if (excludeList.includes(file)) return;
  const content = fs.readFileSync(path.join(compDir, file), 'utf8');
  
  // Check if component uses standard <div class="layout
  if (!content.includes('class="layout') && !content.includes("class='layout") && !content.includes('class="layout ')) {
    brokenComponents.push(file);
  } else {
    correctComponents.push(file);
  }
});

console.log(`TOTAL CALCULATOR COMPONENTS: ${files.length - excludeList.length}`);
console.log(`CORRECT (2-Column Grid): ${correctComponents.length}`);
console.log(`BROKEN (Single-Column / Duplicate H2): ${brokenComponents.length}`);
console.log('\n--- BROKEN COMPONENT FILES ---');
console.log(JSON.stringify(brokenComponents, null, 2));
