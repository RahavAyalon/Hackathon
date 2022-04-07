import autopus_backend_manager
import re
import csv

SPACE_CHAR = " "
fields = ["headline","firstPublicationDate","byline","shortUrl","bodyText"]
end_point= "http://content.guardianapis.com/search"
key = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
pages = 1


class Autopus:
    def __init__(self):
        self.UI = ""
        required_fields_list = ["headline", "firstPublicationDate", "byline", "shortUrl", "bodyText"] # from ui
        self.fields = required_fields_list # from ui
        self.required_fields_dict = {field: i for i, field in enumerate(required_fields_list)}
        # fields, end_point, key = from UI
        self.backend_manager = autopus_backend_manager.CrawlerManager(self.required_fields_dict,end_point,key,pages)
        self.articles_list = self.backend_manager.manage_crawling()

    def write_to_excel(self, path, meta_data=True, content_by_line=False):
        if meta_data:
            with open(path + "meta.csv", "w", encoding="utf-8", newline='') as f:
                writer = csv.writer(f, dialect='excel')
                writer.writerow(self.fields)
                writer.writerows(self.articles_list)
        if content_by_line:
            with open(path + "content.csv", "w", encoding="utf-8", newline='') as f:
                writer = csv.writer(f, dialect='excel')
                writer.writerow(["Title", "Line number", "Line"])
                for art in self.articles_list:
                    sentences = self.parse_article_body(art[self.required_fields_dict["bodyText"]])
                    for i, sentence in enumerate(sentences):
                        writer.writerow([art[self.required_fields_dict["headline"]], i, sentence])




    def parse_article_body(self, article_body):
        """
        :param article_body: text of the body of a certain article
        :return: a list of the separated sentences of the article
        """
        pattern = "(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|!|\")\s"
        return re.split(pattern, article_body)

#TODO TODO
aut = Autopus()
aut.write_to_excel("test4", content_by_line=True)