let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7')

        browser.sleep(3000);
    });

    it('subtraction test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('3');

       homepage.operatorButton();

       homepage.operatorOptionsSubtraction();

        homepage.clickGo();

        homepage.verifyResult('2')

        browser.sleep(3000);
    });



});