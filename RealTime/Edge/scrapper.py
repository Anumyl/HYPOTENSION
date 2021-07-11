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

    soup = BeautifulSoup(driver.page_source, 'lxml')
    tables = soup.find_all('table')
    bpTable = pd.read_html(str(tables))
    print("\n\nBP")
    
    # command = "javac ServerJava.java && java ServerJava " + bpTable[0].iat[0,3]
    #command = "cd .\\BPmeter\\src\\bpmeter"


    # addr = ".\\BPmeter\\src\\bpmeter\\BPmeter.java"
    #os.system(command)
    
    command = "javac BPmeter.java && java BPmeter " + bpTable[0].iat[0,3]
    os.system(command)


    
    return bpTable[0].iat[0,3]