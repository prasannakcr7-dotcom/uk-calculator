import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let updatedCount = 0;

files.forEach(file => {
  if (excludeList.includes(file)) return;

  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  let modified = false;

  // Split frontmatter and HTML
  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let html = parts.slice(2).join('---');

  // 1. Remove redundant calculator-container wrapper divs
  if (html.includes('class="calculator-container"') || html.includes("class='calculator-container'")) {
    html = html.replace(/<div[^>]*class=["']calculator-container["'][^>]*>\s*/g, '');
    html = html.replace(/<\/div>\s*<\/div>\s*<slot\s*\/?>/g, '<slot />');
    modified = true;
  }

  // 2. Replace calculator-card with card
  if (html.includes('calculator-card')) {
    html = html.replace(/class=["']calculator-card["']/g, 'class="card"');
    modified = true;
  }

  // 3. Replace input-group with field-group
  if (html.includes('input-group')) {
    html = html.replace(/class=["']input-group["']/g, 'class="field-group"');
    modified = true;
  }

  // 4. Transform standalone <label> inside field-group
  html = html.replace(/<label\s+for="([^"]+)">([^<]+)<\/label>/g, (m, id, text) => {
    modified = true;
    return `<div class="field-label"><span>${text.trim()}</span></div>`;
  });

  // 5. Wrap standalone input/select in amount-field if inside field-group and not already wrapped
  // 6. Replace results-card with card breakdown-card
  if (html.includes('class="results-card"') || html.includes("class='results-card'") || html.includes('class="results-box"')) {
    html = html.replace(/class=["'](results-card|results-box)["']/g, 'class="card breakdown-card"');
    modified = true;
  }

  // 7. Replace result-item highlight with breakdown-row net
  if (html.includes('result-item highlight')) {
    html = html.replace(/class=["']result-item highlight["']/g, 'class="breakdown-row net"');
    modified = true;
  }

  // 8. Replace result-item with breakdown-row
  if (html.includes('result-item')) {
    html = html.replace(/class=["']result-item["']/g, 'class="breakdown-row"');
    modified = true;
  }

  // 9. Remove custom scoped <style> block that overrides styles with custom px max-width or blue buttons
  if (code.includes('.calculator-container') || code.includes('.calc-button') || code.includes('.input-group')) {
    code = code.replace(/<style>[\s\S]*?<\/style>/gi, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, frontmatter + html, 'utf8');
    updatedCount++;
  }
});

console.log(`Standardized HTML classes and CSS for ${updatedCount} components.`);
