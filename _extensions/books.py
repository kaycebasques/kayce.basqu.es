from docutils import nodes
import requests
from sphinx.util.docutils import SphinxDirective


class BooksDirective(SphinxDirective):
    """A directive to say hello!"""

    required_arguments = 0

    def run(self) -> list[nodes.Node]:
        unordered_list = nodes.bullet_list()
        response = requests.get('https://kaycebasques.github.io/books/src/books.json')
        data = response.json()
        for book in data:
            if book['sessions'] is None:
                continue
            for session in book['sessions']:
                if session['start'] is not None and session['end'] is None:
                    text = f'{book["title"]} by {", ".join(book["authors"])}'
                    list_item = nodes.list_item()
                    paragraph = nodes.paragraph(text=text)
                    list_item += paragraph
                    unordered_list += list_item
        return [unordered_list]


def setup(app):
    app.add_directive('books', BooksDirective)

    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
