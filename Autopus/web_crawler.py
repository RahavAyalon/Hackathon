import requests
from datetime import date, timedelta

class WebCrawler(object):
    """

    """
    def __init__(self, website, key, articles_per_page, number_of_pages=1):
        self.endpoint = website
        self.params = {
            'order-by': "newest",
            'show-fields': 'all',
            'page-size': articles_per_page,
            'api-key': key }
        self.current_page = 1
        self.number_of_pages = number_of_pages
        self.articles = []

    def define_date_range(self, from_date, to_date):
        # self.params[]
        pass

    def get_articles_from_cur_page(self):
        """
        adds the next NUM_OF_ARTICLES_PER_PAGE to the articles list
        """
        result = requests.get(self.endpoint, self.params)
        self.articles += result.json()["response"]['results']

    def next_page(self):
        """
        changes the page of results to the next page
        """
        self.current_page += 1
        self.params["page"] = self.current_page

    def run(self):
        """

        :return: list of json per article
        """
        while self.current_page < self.number_of_pages:
            self.get_articles_from_cur_page()
            self.next_page()
        return self.articles