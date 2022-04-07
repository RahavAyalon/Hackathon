import autopus_backend_manager
fields = ["headline","firstPublicationDate","byline","shortUrl","bodyText"]
end_point= "http://content.guardianapis.com/search"
key = "92ecbb3d-1602-42b3-acdb-e0a9d166e354"
pages = 5


def write_to_excel(self):
    pass



manager = autopus_backend_manager.CrawlerManager(fields,end_point,key,pages)
product = manager.manage_crawling()
for i, art in enumerate(product):
    print(i, " : ", art)