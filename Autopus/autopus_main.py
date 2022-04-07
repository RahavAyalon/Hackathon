import autopus_backend_manager
fields = ["headline","firstPublicationDate","byline","shortUrl","bodyText"]
end_point= "http://content.guardianapis.com/search"
key = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
pages = 5

class Autopus:
    def __init__(self):
        self.UI = ""
        self.fields = ["headline","firstPublicationDate","byline","shortUrl","bodyText"] # from ui
        # fields, end_point, key = from UI
        self.backend_manager =  autopus_backend_manager.CrawlerManager(self.fields,end_point,key,pages)
        self.product = self.backend_manager.manage_crawling()
        self.parser = ""


    def write_to_excel(self, path):
        final_file = ",".join(self.fields) + "\n"
        for art in self.product:
            final_file+= ",".join(['"""' +fld + '"""' for fld in art ]) + "\n"
        with open(path + ".csv", "w") as f:
            f.write(final_file)

aut = Autopus()
aut.write_to_excel("test")