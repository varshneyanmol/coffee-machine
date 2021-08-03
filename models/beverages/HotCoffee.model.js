const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class HotCoffee extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.HOT_COFFEE.NAME, composition, price);
    }
}

module.exports = HotCoffee;