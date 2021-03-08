import Page from './page';


class Helpers extends Page {

    get quoteInputField () { return $('._2Ff6O56evM.sc-bdVaJa.dmWroL>div>div>div>div>input')}
    get quoteInfoButton () { return $('//a[text()="Quote"]') }
    get quoteMarketCap () { return $ ("//div[@class='_1G7n38q1bb sc-bdVaJa lbvrig'][11]/p")}
    get securityDetailsInfoButton () { return $('//a[text()="Security Details"]') }
    get securityDetailsMarketCap () { return $$('._8AXJn4ourf.sc-htpNat.jtWIOA.sc-bdVaJa.gRrvFh>div.sc-bdVaJa.kYmYWE')[0]}
    get securityDetailsInfoDate () { return $$('._8AXJn4ourf.sc-htpNat.jtWIOA.sc-bdVaJa.gRrvFh>div.sc-bdVaJa.fKInnm')[0]}


    setCompanyName (company) {
        this.quoteInputField.setValue(company);
    }



    open () {
        return super.open('login');
    }
}

export default new Helpers();
