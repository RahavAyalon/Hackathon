import web_crawler


class CrawlerManager:
    # NUMBER_OF_PAGES = 5              # the user decides
    # ARTICLES_PER_PAGE = 200
    # GUARDIAN_API_KEY = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
    # GUARDIAN_API_ENDPOINT = 'http://content.guardianapis.com/search'
    # USER_REQUIRED_FIELDS_LIST = ["headline", "webPublicationDate"]

    def __init__(self, required_fields_list):
        self.required_fields_list = required_fields_list

    def create_minimized_articles_list(self, original_articles_list):
        pass

    def write_to_excel(self):
        pass

    def manage_crawling(self):
        crawler = web_crawler.WebCrawler(GUARDIAN_API_ENDPOINT, GUARDIAN_API_KEY, ARTICLES_PER_PAGE,
                              NUMBER_OF_PAGES)
        articles_list = crawler.run()                # a list of dictionaries
        minimized_list = create_minimized_articles_list(articles_list)




