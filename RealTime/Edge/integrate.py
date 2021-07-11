from authenticate import login
from scrapper import scrape

driver = login()
scrape(driver)