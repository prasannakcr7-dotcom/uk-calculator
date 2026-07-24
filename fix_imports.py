import glob

components = glob.glob('src/components/*.astro')
fixed = 0

for filepath in components:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    new_lines = []
    has_changed = False

    for line in lines:
        if 'import Sidebar' in line:
            correct_line = "import Sidebar from './Sidebar.astro';"
            if line != correct_line:
                new_lines.append(correct_line)
                has_changed = True
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    if has_changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
        fixed += 1

print(f'Fixed {fixed} component files!')
