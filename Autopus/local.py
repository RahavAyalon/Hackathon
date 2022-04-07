import re

def parse_article_body(self, article_body):
    """
    :param article_body: text of the body of a certain article
    :return: the required separated str
    """
    pattern = "(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!|\")\s"
    return re.split(pattern, article_body)