class Beverage {
    _name;
    _composition;
    _price;

    constructor(name, composition, price) {
        this._name = name;
        this._composition = composition;
        this._price = price || 0;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get composition() {
        return this._composition;
    }

    set composition(value) {
        this._composition = value;
    }
}

module.exports = Beverage;