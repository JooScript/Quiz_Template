#!/usr/bin/env python3
"""Build a single-file Quiz.html from index.html, style.css and main.js.

- Removes <link rel="stylesheet" href="style.css" /> from <head>
- Removes <script src="main.js" defer></script> from <head>
- Inlines the CSS in a <style> element inside <head>
- Inlines the JS in a <script> element at the end of <body>

Usage:  python build_quiz.py [source_dir] [output_file]
"""

import re
import sys
from pathlib import Path

src = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parent
out = Path(sys.argv[2]) if len(sys.argv) > 2 else src / "../ExportedQuiz/Quiz.html"

html = (src / "../index.html").read_text(encoding="utf-8")
css = (src / "../style.css").read_text(encoding="utf-8").strip()
js = (src / "../main.js").read_text(encoding="utf-8").strip()

# 1) Remove the external references from <head>
html, n_link = re.subn(
    r'[ \t]*<link\b[^>]*href=["\']style\.css["\'][^>]*>[ \t]*\r?\n?', "", html, flags=re.I
)
html, n_script = re.subn(
    r'[ \t]*<script\b[^>]*src=["\']main\.js["\'][^>]*>\s*</script>[ \t]*\r?\n?',
    "",
    html,
    flags=re.I,
)
if not (n_link and n_script):
    sys.exit("Could not find the style.css <link> or main.js <script> line in index.html")

# 2) Inline CSS at the end of <head>
style_block = "    <style>\n" + css + "\n    </style>\n  "
html, n = re.subn(r"[ \t]*</head>", lambda m: style_block + "</head>", html, count=1, flags=re.I)
if not n:
    sys.exit("</head> not found")

# 3) Inline JS at the end of <body> (escape any closing script tag inside the code)
js = js.replace("</script", "<\\/script")
script_block = "    <script>\n" + js + "\n    </script>\n  "
html, n = re.subn(r"[ \t]*</body>", lambda m: script_block + "</body>", html, count=1, flags=re.I)
if not n:
    sys.exit("</body> not found")

out.write_text(html, encoding="utf-8")
print(f"Created: {out}")