class Ingredient {
    /**
     * We can add more properties of an ingredient here as required.
     * I have just added 'price' here.
     * Have made both these properties as protected. 'protected' properties are
     * not enforced by the language, they are just for the developer to know.
     */
    _name;
    _price;
    _thresholdAlertQuantity;

    constructor(name, price, thresholdAlertQuantity) {
        this._name = name;
        this._price = price || 0;
        this._thresholdAlertQuantity = thresholdAlertQuantity || 0;
    }

    /**
     * I have not implemented the setter for name property assuming that name of an
     * ingredient can not be changed after initialization.
     */
    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get thresholdAlertQuantity() {
        return this._thresholdAlertQuantity;
    }

    set thresholdAlertQuantity(value) {
        this._thresholdAlertQuantity = value;
    }
}

module.exports = Ingredient;