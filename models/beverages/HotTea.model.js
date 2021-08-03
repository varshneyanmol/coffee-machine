const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class HotTea extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.HOT_TEA.NAME, composition, price);
    }
}

module.exports = HotTea;