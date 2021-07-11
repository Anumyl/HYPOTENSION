from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from webdriver_manager.chrome import ChromeDriverManager

def login():
    driver = webdriver.Chrome(ChromeDriverManager().install())

    url = "https://cloud.ihealthlabs.com/UserAuthWeb/login.aspx"
    userEMail = "psgedgehealthcare@gmail.com"
    password = "ihealth08273345"

    driver.get(url)

    eMailFieldID ="txtloginemail"
    passFieldID = "txtloginpassword"
    loginButton = "lognButton"

    driver.find_element_by_id(eMailFieldID).send_keys(userEMail)
    driver.find_element_by_id(passFieldID).send_keys(password)
    driver.find_element_by_id(loginButton).click()

    return driver