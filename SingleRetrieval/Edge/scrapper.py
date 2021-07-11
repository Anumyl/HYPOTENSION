import pandas as pd
import os
from bs4 import BeautifulSoup
from selenium import webdriver


from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

def scrape(driver):
    delay = 10

    try:
        myElem = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.ID, 'IdOfMyElement')))
        print("BP Page is ready!")
    except TimeoutException:
        print("BP Loading took too much time!")

    # Scrape table content into a pandas table - bp

    soup = BeautifulSoup(driver.page_source, 'lxml')
    tables = soup.find_all('table')
    bpTable = pd.read_html(str(tables))
    
    # print("\n\nBP")
    print(bpTable[0])

    with open('./data.txt', 'a') as f:
        f.write(
            bpTable[0].to_string(header = False, index = False)
        )

    # start command for analysis program

    command = "javac BPmeter.java && java BPmeter"
    os.system(command)

    return bpTable[0].iat[0,3]