import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const contentDir = path.join(__dirname, 'src/content/calculators/en');

const astroFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));
const mdFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const brokenSidebars = [];
const unbalancedMdFiles = [];

// 1. Audit Astro files for unbalanced div tags in HTML portion
astroFiles.forEach(file => {
  if (['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'].includes(file)) return;

  const code = fs.readFileSync(path.join(compDir, file), 'utf8');
  const parts = code.split('---');
  if (parts.length < 3) return;

  const html = parts.slice(2).join('---');

  // Count open <div vs close </div>
  const opens = (html.match(/<div[\s>]/gi) || []).length;
  const closes = (html.match(/<\/div>/gi) || []).length;

  if (opens !== closes) {
    brokenSidebars.push({ file, opens, closes, diff: opens - closes });
  }
});

// 2. Audit Markdown files for unclosed <div class="example-box"> or <div class="faq-sec">
mdFiles.forEach(file => {
  const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
  const opens = (content.match(/<div[\s>]/gi) || []).length;
  const closes = (content.match(/<\/div>/gi) || []).length;

  if (opens !== closes) {
    unbalancedMdFiles.push({ file, opens, closes, diff: opens - closes });
  }
});

console.log(`BROKEN ASTRO COMPONENTS WITH UNBALANCED DIVS (${brokenSidebars.length}):`);
console.log(JSON.stringify(brokenSidebars, null, 2));

console.log(`\nBROKEN MARKDOWN FILES WITH UNBALANCED DIVS (${unbalancedMdFiles.length}):`);
console.log(JSON.stringify(unbalancedMdFiles, null, 2));
