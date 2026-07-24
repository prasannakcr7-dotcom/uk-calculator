import glob
import re

components = glob.glob('src/components/*.astro')
print('Found components:', len(components))

modified = 0
for filepath in components:
    if filepath.endswith('Sidebar.astro') or filepath.endswith('NationFlagIcon.astro'):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Don't duplicate import
    if 'Sidebar.astro' not in content:
        # Add import after first '---'
        content = re.sub(r'(---\s*\n)', r'\1import Sidebar from \'./Sidebar.astro\';\n', content, count=1)

    # Check side-col or sidebar
    if 'class="side-col"' in content or "class='side-col'" in content or 'class="sidebar"' in content or "class='sidebar'" in content:
        if '<Sidebar' not in content:
            # Append <Sidebar /> before closing tag of side-col / sidebar
            content = re.sub(r'(<(?:div|aside)\s+class=["\'](?:side-col|sidebar)["\'][^>]*>[\s\S]*?)(</(?:div|aside)>)', r'\1\n    <Sidebar />\n\2', content, count=1)
            modified += 1
    else:
        if '<Sidebar' not in content:
            # Append <div class="side-col"><Sidebar /></div> inside .layout
            if 'calculator-layout' in content:
                content = re.sub(r'(<div\s+class=["\'][^"\']*calculator-layout[^"\']*["\'][^>]*>[\s\S]*?)(</div>\s*(?:<script|$))', r'\1\n  <div class="side-col">\n    <Sidebar />\n  </div>\n\2', content, count=1)
                modified += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f'Successfully updated {modified} components with Sidebar!')
