from bs4 import BeautifulSoup
import requests


class WebPageScraper:
    """

    """
    def retrieve_html_from_url(self, url):
        """
        :param url: str
        :return: html content text
        """
        request = requests.get(url, timeout=5)
        return BeautifulSoup(request.content, "html.parser")


# def parse_html(html_content):
#     """
#     :param html_content:
#     :return: dictionary with the information with the fields as keys (title, date etc)
#     """
#         title = html_content.findAll(class_="single-title")[0].text.encode('utf-8')
#         title = title[1:-1]                    # cutting unnecessary spaces
#         paragraphs = html_content.findAll(class_="single-content")[0].text.encode('utf-8')
#         parsed_article_list = parse_article_txt(paragraphs.decode('utf-8'))
#         write_to_file(url, title, parsed_article_list)

if __name__ == '__main__':
    scraper = WebPageScraper()
    html_txt = scraper.retrieve_html_from_url("https://www.geeksforgeeks.org/constructors-in-python/")
    print(html_txt)



