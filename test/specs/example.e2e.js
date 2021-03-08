import Helpers from '../pageobjects/helpers';
import  Data from '../../data.json';

describe('Scenarios', () => {
    let marketCapQuote;
    let marketCapSecurity;
    let marketCapDate;
    it(`scenario for ${Data.companies.company2}`, () => {
        browser.maximizeWindow();
        Helpers.open();
        Helpers.setCompanyName(Data.companies.company2);
        browser.pause(2000);
        browser.keys(['ArrowDown', 'Enter']);
        Helpers.quoteInfoButton.click();
        marketCapQuote = Helpers.quoteMarketCap.getText();
        Helpers.securityDetailsInfoButton.click();
        marketCapSecurity = Helpers.securityDetailsMarketCap.getText();
        marketCapDate = Helpers.securityDetailsInfoDate.getText();

    });
    it('Market caps equal', () => {
        console.log(`Market Cap for ${Data.companies.company2}  ${marketCapSecurity} on ${marketCapDate}`)
        expect(marketCapQuote).toEqual(marketCapSecurity);

    });
});


