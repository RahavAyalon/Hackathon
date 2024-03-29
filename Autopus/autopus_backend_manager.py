import web_crawler


class CrawlerManager:

    ARTICLES_PER_PAGE = 200

    def __init__(self, required_fields_dict, web_endpoint, api_key, number_of_pages):
        self.required_fields_dict = required_fields_dict
        self.web_endpoint = web_endpoint
        self.api_key = api_key
        self.number_of_pages = number_of_pages

    def create_minimized_articles_list(self, original_articles_list):
        """
        :param original_articles_list: list of articles- each is a json dict with ALL the field extracted
        :return: list of lists with only the relevant fields from each article
        """
        minimized = []
        for article_json in original_articles_list:
            article_list = [0] * len(self.required_fields_dict)  # creates "empty" list with the size of the minimized list
            for field, i in self.required_fields_dict.items():
                if field in article_json["fields"]:
                    article_list[i] = article_json["fields"][field]  # relevant in the guardian json
                else:
                    article_list[i] = "None"
            minimized.append(article_list)
        return minimized

    def manage_crawling(self):
        """
        :return: list of lists with only the relevant fields from each article
        """
        crawler = web_crawler.WebCrawler(self.web_endpoint, self.api_key,
                                         self.ARTICLES_PER_PAGE, self.number_of_pages)
        articles_list = crawler.run()                # a list of dictionaries
        minimized_list = self.create_minimized_articles_list(articles_list)
        return minimized_list
