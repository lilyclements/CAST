import re

def flatten_chapter(filename):
    with open(f'source/{filename}', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove parent section wrapper tags but keep their content
    # Match: comment, opening section tag with title
    content = re.sub(
        r'  <!-- Section \d+: [^\n]+ -->\n  <section xml:id="sec-[^"]+">[\s\S]*?<title>[^<]+</title>\n\n',
        '',
        content
    )
    
    # Remove closing section tags for parent sections
    # We need to be careful - only remove the parent closing tags
    lines = content.split('\n')
    new_lines = []
    section_depth = 0
    skip_closing = False
    
    for i, line in enumerate(lines):
        if '<section xml:id' in line:
            section_depth += 1
        elif '</section>' in line:
            if section_depth == 1 and 'subsection' in content:
                # This is a parent section closing tag, check if we should skip it
                # Look back to see if we had subsections
                skip_closing = True
            section_depth -= 1
            if skip_closing and section_depth == 0:
                skip_closing = False
                continue  # Skip this closing tag
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # Now change subsection to section
    content = content.replace('<subsection ', '<section ')
    content = content.replace('</subsection>', '</section>')
    content = content.replace('subsec-', 'sec-')
    
    # Fix indentation - move everything one level out
    content = re.sub(r'\n    <section', '\n  <section', content)
    content = re.sub(r'\n      <(title|p|assemblage|ul|ol|table|me|md|figure)', r'\n    <\1', content)
    content = re.sub(r'\n        <', r'\n      <', content)
    content = re.sub(r'\n          <', r'\n        <', content)
    content = re.sub(r'\n            <', r'\n          <', content)
    content = re.sub(r'\n    </section>', '\n  </section>', content)
    content = re.sub(r'\n      </(title|p|assemblage|ul|ol|table|me|md|figure)', r'\n    </\1', content)
    content = re.sub(r'\n        </', r'\n      </', content)
    content = re.sub(r'\n          </', r'\n        </', content)
    
    with open(f'source/{filename}', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'Flattened {filename}')

# Flatten both chapters
flatten_chapter('ch02-one-numerical-variable.ptx')
flatten_chapter('ch03-two-numerical-variables.ptx')
