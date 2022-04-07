import web_crawler


class CrawlerManager:

    ARTICLES_PER_PAGE = 200

    def __init__(self, required_fields_list, web_endpoint, api_key, number_of_pages):
        self.required_fields_dict = {field: i for i, field in enumerate(required_fields_list)}
        self.web_endpoint = web_endpoint
        self.api_key = api_key
        self.number_of_pages = number_of_pages

    def create_minimized_articles_list(self, original_articles_list):
        minimized = []
        for article_json in original_articles_list:
            article_list = [0] * len(self.required_fields_dict)
            for field, i in self.required_fields_dict.items():
                article_list[i] = article_json[field]
            minimized.append(article_list)
        return minimized

    def write_to_excel(self):
        pass

    def manage_crawling(self):
        crawler = web_crawler.WebCrawler(self.web_endpoint, self.api_key,
                                         self.ARTICLES_PER_PAGE, self.number_of_pages)
        articles_list = crawler.run()                # a list of dictionaries
        minimized_list = self.create_minimized_articles_list(articles_list)