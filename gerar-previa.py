"""Gera uma cópia HTML autônoma a partir dos arquivos editáveis. Python 3."""
from pathlib import Path
from urllib.parse import quote
from base64 import b64encode

root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
css = (root / 'styles.css').read_text(encoding='utf-8')
for asset in (root / 'assets').glob('*.png'):
    data_url = 'data:image/png;base64,' + b64encode(asset.read_bytes()).decode('ascii')
    relative_path = 'assets/' + asset.name
    css = css.replace('url("' + relative_path + '")', 'url("' + data_url + '")')
    html = html.replace('src="' + relative_path + '"', 'src="' + data_url + '"')
js = (root / 'app.js').read_text(encoding='utf-8')
icon = (root / 'favicon.svg').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css + '\n</style>')
html = html.replace('<script defer src="app.js"></script>', '')
html = html.replace('href="favicon.svg"', 'href="data:image/svg+xml,' + quote(icon) + '"')
html = html.replace('</body>', '<script>\n' + js + '\n</script>\n</body>')
(root / 'PREVIA.html').write_text(html, encoding='utf-8')
print('PREVIA.html atualizada.')
