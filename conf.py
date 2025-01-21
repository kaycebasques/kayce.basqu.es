import sys
import pathlib


sys.path.append(str(pathlib.Path('_extensions').resolve()))


project = 'kayce.basqu.es'
author = 'Kayce Basques'
copyright = '2025, Kayce Basques'
release = '0.0.1'


exclude_patterns = [
    '.github',
    '.gitignore',
    '_build',
    '_extensions',
    'boostrap.fish',
    'requirements.txt',
    'venv'
]
templates_path = ['_templates']


extensions = [
    'books'
]


html_extra_path = []
html_permalinks_icon = '#'
html_static_path = ['_static']


pygments_style = 'sphinx'
