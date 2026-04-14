import re

file_path = r'c:\ROBLOX\WEBSITE_TOKOROBLOX\src\data\products.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove tier: "...", rarity: "...", location: "...", stats: { ... },
# We need to be careful with multi-line stats.
patterns = [
    r'\s*tier:\s*"[^"]*",?',
    r'\s*rarity:\s*"[^"]*",?',
    r'\s*location:\s*"[^"]*",?',
    r'\s*stats:\s*\{[^}]*\},?'
]

new_content = content
for pattern in patterns:
    new_content = re.sub(pattern, '', new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
