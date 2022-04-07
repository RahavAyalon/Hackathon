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

import web_crawler

NUMBER_OF_PAGES = 5              # the user decides
ARTICLES_PER_PAGE = 200
GUARDIAN_API_KEY = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
GUARDIAN_API_ENDPOINT = 'http://content.guardianapis.com/search'


# USER_REQUIRED_FIELDS_LIST = ["headline", "webPublicationDate"]


class CrawlerManager:
    def __init__(self, required_fields_list):
        self.required_fields_dict = {field: i for i, field in enumerate(required_fields_list)}

    def create_minimized_articles_list(self, original_articles_list):
        """

        :param original_articles_list: list of articles- each is a json dict with ALL the field extracted
        :return: list of lists with only the relevant feilds from each article
        """
        minimized = []
        for article_json in original_articles_list:
            article_list = [0] * len(self.required_fields_dict)  # creates "empty" list with the size of the minimized list
            for field, i in self.required_fields_dict.items():
                article_list[i] = article_json["fields"][field]  # relevant in the guardian json
            minimized.append(article_list)
        return minimized



    def manage_crawling(self):
        crawler = web_crawler.WebCrawler(GUARDIAN_API_ENDPOINT, GUARDIAN_API_KEY, ARTICLES_PER_PAGE,
                              NUMBER_OF_PAGES)
        articles_list = crawler.run()                # a list of dictionaries
        minimized_list = self.create_minimized_articles_list(articles_list)




