import autopus_backend_manager
import re
import csv

SPACE_CHAR = " "
fields = ["headline","firstPublicationDate","byline","shortUrl","bodyText"]
end_point= "http://content.guardianapis.com/search"
key = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
pages = 5


class Autopus:
    def __init__(self):
        self.UI = ""
        required_fields_list = ["headline","firstPublicationDate","byline","shortUrl","bodyText"] # from ui
        self.fields = required_fields_list # from ui
        self.required_fields_dict = {field: i for i, field in enumerate(required_fields_list)}
        # fields, end_point, key = from UI
        self.backend_manager = autopus_backend_manager.CrawlerManager(self.required_fields_dict,end_point,key,pages)
        self.articles_list = self.backend_manager.manage_crawling()

    def write_to_excel(self, path):
        final_file = ",".join(self.fields) + "\n"
        for art in self.articles_list:
            final_file += ",".join(['"""' + fld + '"""' for fld in art ]) + "\n"
        with open(path + ".csv", "w") as f:
            f.write(final_file)

    def parse_article_body(self, article_body):
        """
        :param article_body:
        :return: the required separated str
        """
        article_txt = article_body.replace('. ', '.\n')
        # article_txt = article_txt.replace(NON_BREAKING_SPACE_UNICODE, SPACE_CHAR)
        sentences_list = article_txt.split('\n')
        for i in range(len(sentences_list)):
            while sentences_list[i][0] == SPACE_CHAR:
                sentences_list[i] = sentences_list[i][1:]       # cutting initial spaces
            while sentences_list[i][-1] == SPACE_CHAR:
                sentences_list[i] = sentences_list[i][:-1]      # cutting final spaces
        return sentences_list


aut = Autopus()
aut.write_to_excel("test")