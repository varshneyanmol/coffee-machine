const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class BlackTea extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.BLACK_TEA.NAME, composition, price);
    }
}

module.exports = BlackTea;