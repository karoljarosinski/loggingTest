import { browser, element, by } from 'protractor';

describe('Logging test with incorrect e-mail', () => {
    it('webpage should display notification about incorrect e-mail', () => {
        browser.waitForAngularEnabled(false);
         browser.get('https://boeing.wd1.myworkdayjobs.com/en-US/EXTERNAL_CAREERS/login');
         expect(element(by.css('.gwt-TextBox WF-M')).isPresent());
         element(by.xpath('//div[@data-automation-id="userName"]/input')).sendKeys('a');
         element(by.xpath('//div[@data-automation-id="password"]/input')).sendKeys('a');
         element(by.xpath('//button[@title = "Sign In"]')).click;
         expect(element(by.xpath('//div[@data-automation-id="alertMessage"]')).isDisplayed()).toBeTruthy();
    });
});