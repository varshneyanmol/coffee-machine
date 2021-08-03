const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class HotMilk extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.HOT_MILK.NAME, composition, price);
    }
}

module.exports = HotMilk;