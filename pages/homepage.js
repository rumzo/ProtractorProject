let homepage = function() {
    
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let operatorButton = element(by.model('operator'));;
    let operatorOptionsSubtraction = element(by.cssContainingText('option', '-'));

    this.get = function(url) {
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNum) {
        firstNumber_input.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(secondNum) {
        secondNumber_input.sendKeys(secondNum);
    };

    this.operatorButton = function() {
        operatorButton.click();
    };

    this.operatorOptionsSubtraction = function() {
        operatorOptionsSubtraction.click();
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText(' .ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();








