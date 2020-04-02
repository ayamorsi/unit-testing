import os
import unittest
from selenium import webdriver

from selenium.webdriver.common.keys import Keys

class TestLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()


    def test_facebook_login(self):
        driver = webdriver.Chrome()
        driver.get("https://www.facebook.com/")
        assert "Facebook" in driver.title
        emial = driver.find_element_by_name('email')
        password = driver.find_element_by_name('pass')
        login = driver.find_element_by_id('u_0_b')
        emial.clear()
        password.clear()
        emial.send_keys('enter youremail')
        password.send_keys('enter your pass')
        login.click()
        assert "aya" in driver.page_source

 
    # def tearDown(self):
    #     self.driver.quit()




if __name__ == '__main__':
    unittest.main()





    # User = os.environ['API_USER'] 
#  Password = os.environ['API_PASSWORD'] 