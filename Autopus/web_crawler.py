import logging
from urllib.parse import urljoin
import requests
import web_page_scraper, bs4
import json
from os import makedirs
from os.path import join, exists
from datetime import date, timedelta

class WebCrawler(object):
    def __init__(self, urls):
        self.visited_urls = []
        self.urls_to_visit =urls
        self.scraper = web_page_scraper.WebPageScraper()

    def get_linked_urls(self, url, html):
        soup = bs4.BeautifulSoup(html, 'html.parser')
        for link in soup.find_all('a'):
            path = link.get('href')
            if path and path.startswith('/'):
                path = urljoin(url, path)
            yield path

    def add_url_to_visit(self, url):
        if url not in self.visited_urls and url not in self.urls_to_visit:
            self.urls_to_visit.append(url)

    def crawl(self, url):
        html = self.scraper.retrieve_html_from_url(url)
        for url in self.get_linked_urls(url, html):
            self.add_url_to_visit(url)

    def run(self):
        while self.urls_to_visit:
            url = self.urls_to_visit.pop(0)
            logging.info(f'Crawling: {url}')
            try:
                self.crawl(url)
            except Exception:
                logging.exception(f'Failed to crawl: {url}')
            finally:
                self.visited_urls.append(url)

if __name__ == '__main__':
    http://content.guardianapis.com/search?from-date=2016-01-02&
    to-date=2016-01-02&order-by=newest&show-fields=all&page-size=200
    &api-key=92ecbb3d-1602-42b3-acdb-e0a9d166e354
    API_KEY = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
    my_params = {
    # 'from-date': "",
    # 'to-date': "",
    'order-by': "newest",
    'show-fields': 'all',
    'page-size': 200,
    'api-key': API_KEY }
    API_ENDPOINT = 'http://content.guardianapis.com/search'
    # my_params['from-date'] = date()
    results = requests.get(API_ENDPOINT, my_params)
    results.json()
    print(results.json())
