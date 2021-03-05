import Helpers from '../pageobjects/helpers';
import  Data from '../../data.json';

describe('Scenarios', () => {
    let marketCapQuote;
    let marketCapSecurity;
    let marketCapDate;
    it('scenario for RHHBY', () => {
        browser.maximizeWindow();
        Helpers.open();
        Helpers.setCompanyName(Data.companies.company1);
        browser.pause(2000);
        browser.keys(['ArrowDown', 'Enter']);
        Helpers.quoteInfoButtonRHHBY.click();
        browser.pause(2000);
        marketCapQuote = Helpers.quoteMarketCap.getText();
        Helpers.securityDetailsInfoButtonRHHBY.click();
        browser.pause(2000);
        marketCapSecurity = Helpers.securityDetailsMarketCap.getText();
        marketCapDate = Helpers.securityDetailsInfoDate.getText();

    });
    it('RHHBY Market caps equal', () => {
        console.log(`Market Cap for RHHBY  ${marketCapSecurity} on ${marketCapDate}`)
        expect(marketCapQuote).toEqual(marketCapSecurity);

    });

    it('scenario for OTCM', () => {
        browser.maximizeWindow();
        Helpers.open();
        Helpers.setCompanyName(Data.companies.company2);
        browser.pause(2000);
        browser.keys(['ArrowDown', 'Enter']);
        Helpers.quoteInfoButtonOTCM.click();
        browser.pause(2000);
        marketCapQuote = Helpers.quoteMarketCap.getText();
        Helpers.securityDetailsInfoButtonOTCM.click();
        browser.pause(2000);
        marketCapSecurity = Helpers.securityDetailsMarketCap.getText();
        marketCapDate = Helpers.securityDetailsInfoDate.getText();

    });
    it('OTCM Market caps equal', () => {
        console.log(`Market Cap for OTCM ${marketCapSecurity} on ${marketCapDate}`)
        expect(marketCapQuote).toEqual(marketCapSecurity);

    });
});


