import glob
import re

components = glob.glob('src/components/*.astro')
print('Found components:', len(components))

cleaned = 0
for filepath in components:
    if filepath.endswith('Sidebar.astro') or filepath.endswith('NationFlagIcon.astro'):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Ensure Sidebar is imported
    if "import Sidebar from './Sidebar.astro';" not in content:
        content = re.sub(r'(---\s*\n)', r"\1import Sidebar from './Sidebar.astro';\n", content, count=1)

    # Replace existing side-col or sidebar contents with clean <Sidebar />
    if 'class="side-col"' in content or "class='side-col'" in content or 'class="sidebar"' in content or "class='sidebar'" in content:
        new_content = re.sub(r'(<(?:div|aside)\s+class=["\'](?:side-col|sidebar)["\'][^>]*>)[\s\S]*?(</(?:div|aside)>)', r'\1\n    <Sidebar />\n\2', content, count=1)
        if new_content != content:
            content = new_content
            cleaned += 1
    else:
        if 'calculator-layout' in content:
            new_content = re.sub(r'(<div\s+class=["\'][^"\']*calculator-layout[^"\']*["\'][^>]*>[\s\S]*?)(</div>\s*(?:<script|$))', r'\1\n  <div class="sidebar">\n    <Sidebar />\n  </div>\n\2', content, count=1)
            if new_content != content:
                content = new_content
                cleaned += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f'Successfully cleaned {cleaned} components to use pure <Sidebar />!')
