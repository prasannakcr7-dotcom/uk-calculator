import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compDir = path.join(__dirname, 'src/components');
const mdDir = path.join(__dirname, 'src/content/calculators/en');

const astroFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.astro'));
const mdFiles = fs.readdirSync(mdDir).filter(f => f.endsWith('.md'));

// Build map of translationUrl/filename to category
const slugToCategoryMap = {};

mdFiles.forEach(file => {
  const content = fs.readFileSync(path.join(mdDir, file), 'utf8');
  const catMatch = content.match(/category:\s*["']?([^"'\r\n]+)["']?/i);
  const transMatch = content.match(/translationUrl:\s*["']?([^"'\r\n]+)["']?/i);

  const category = catMatch ? catMatch[1].trim() : 'trabajo';

  // Base name matching
  const baseName = file.replace('.md', '');
  slugToCategoryMap[baseName] = category;

  if (transMatch) {
    const slug = transMatch[1].replace(/^\/|\/$/g, '');
    slugToCategoryMap[slug] = category;
  }
});

const categoryClassMap = {
  trabajo: 'work-category',
  impuestos: 'taxes-category',
  vivienda: 'housing-category',
  familia: 'family-category',
  salud: 'health-category',
  movilidad: 'mobility-category',
  social: 'social-category',
  finanzas: 'finance-category',
  alltag: 'reside-category'
};

const excludeList = ['Sidebar.astro', 'Footer.astro', 'Header.astro', 'HeaderLink.astro', 'NationFlagIcon.astro', 'SEO.astro'];

let updatedCount = 0;

astroFiles.forEach(file => {
  if (excludeList.includes(file)) return;

  const filePath = path.join(compDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // Derive slug from component filename (Kebab-case conversion)
  const componentSlug = file
    .replace('.astro', '')
    .replace(/([a-z0-9])([A-A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();

  // Determine category
  let categoryKey = slugToCategoryMap[componentSlug] || 'trabajo';

  // Specific overrides for known keywords if missing from map
  const fLower = file.toLowerCase();
  if (fLower.includes('tax') || fLower.includes('vat') || fLower.includes('stamp') || fLower.includes('sdlt') || fLower.includes('hmrc')) {
    categoryKey = slugToCategoryMap[componentSlug] || 'impuestos';
  } else if (fLower.includes('mortgage') || fLower.includes('rent') || fLower.includes('house') || fLower.includes('home') || fLower.includes('tile') || fLower.includes('wallpaper') || fLower.includes('room') || fLower.includes('radiator')) {
    categoryKey = slugToCategoryMap[componentSlug] || 'vivienda';
  } else if (fLower.includes('car') || fLower.includes('vehicle') || fLower.includes('mileage') || fLower.includes('ev') || fLower.includes('fuel') || fLower.includes('uber') || fLower.includes('sorn')) {
    categoryKey = slugToCategoryMap[componentSlug] || 'movilidad';
  } else if (fLower.includes('child') || fLower.includes('maternity') || fLower.includes('paternity') || fLower.includes('parental') || fLower.includes('divorce') || fLower.includes('spousal') || fLower.includes('pregnancy')) {
    categoryKey = slugToCategoryMap[componentSlug] || 'familia';
  } else if (fLower.includes('loan') || fLower.includes('pension') || fLower.includes('savings') || fLower.includes('isa') || fLower.includes('interest') || fLower.includes('crypto') || fLower.includes('overdraft') || fLower.includes('budget') || fLower.includes('investment') || fLower.includes('bitcoin')) {
    categoryKey = slugToCategoryMap[componentSlug] || 'finanzas';
  }

  const categoryClass = categoryClassMap[categoryKey] || 'work-category';

  // Ensure Sidebar import
  if (!code.includes("import Sidebar from './Sidebar.astro'")) {
    code = code.replace(/^(---\r?\n)/, `$1import Sidebar from './Sidebar.astro';\n`);
  }

  const parts = code.split('---');
  if (parts.length < 3) return;

  const frontmatter = parts.slice(0, 2).join('---') + '---';
  let body = parts.slice(2).join('---');

  // Extract script block
  let scriptBlock = '';
  body = body.replace(/<script[\s\S]*?<\/script>/gi, (m) => {
    scriptBlock += m + '\n';
    return '';
  });

  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');

  // Strip layout wrapper tags
  body = body.replace(/<div[^>]*class=["'][^"']*layout[^"']*["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["']main-col["'][^>]*>/gi, '');
  body = body.replace(/<div[^>]*class=["'](side-col|sidebar)["'][^>]*>[\s\S]*?<\/div>/gi, '');
  body = body.replace(/<slot\s*\/?>/gi, '');

  // Wrap naked <p> bullet lists in a styled writeup card
  body = body.replace(/<p[^>]*>\s*•[\s\S]*?<\/p>/gi, (match) => {
    const listItems = match
      .replace(/<p[^>]*>/gi, '')
      .replace(/<\/p>/gi, '')
      .split(/<br\s*\/?>|\n/)
      .map(item => item.trim())
      .filter(item => item.length > 0)
      .map(item => item.startsWith('•') ? item.slice(1).trim() : item)
      .map(item => `        <li>${item}</li>`)
      .join('\n');

    return `<div class="card writeup" style="margin-top: 18px;">
      <h3 style="margin-bottom: 12px;">💡 Key Rules & Considerations</h3>
      <ul style="padding-left: 20px; margin: 0; line-height: 1.7; color: var(--ink);">
${listItems}
      </ul>
    </div>`;
  });

  // Reconstruct breakdown card with breakdown-list and single net bottom row
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

    body = body.replace(/<div[^>]*class=["']card breakdown-card["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/i, () => {
      return `<div class="card breakdown-card" id="results-card">
      <h2>Calculation Breakdown</h2>
      <div class="breakdown-list">${newRowsHtml}
      </div>
    </div>`;
    });
  }

  // Balance div tags
  let opens = (body.match(/<div[\s>]/gi) || []).length;
  let closes = (body.match(/<\/div>/gi) || []).length;

  while (closes > opens && body.lastIndexOf('</div>') !== -1) {
    const idx = body.lastIndexOf('</div>');
    body = body.slice(0, idx) + body.slice(idx + 6);
    closes--;
  }

  while (opens > closes) {
    body += '\n</div>';
    closes++;
  }

  // Construct clean outer template grid with explicit category & sidebar prop
  const cleanBody = `
<div class="layout calculator-layout ${categoryClass}">
  <div class="main-col">
    ${body.trim()}
    <slot />
  </div>
  <div class="sidebar">
    <Sidebar category="${categoryKey}" />
  </div>
</div>

${scriptBlock.trim()}
`;

  fs.writeFileSync(filePath, frontmatter + cleanBody, 'utf8');
  updatedCount++;
});

console.log(`Successfully refactored ${updatedCount} components with incorporated learnings!`);
