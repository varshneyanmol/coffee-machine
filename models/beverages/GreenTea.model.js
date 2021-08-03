const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class GreenTea extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.GREEN_TEA.NAME, composition, price);
    }
}

module.exports = GreenTea;