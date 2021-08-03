const Beverage = require('./Beverage.model');
const {BEVERAGES} = require('../../configs/beverages.config');

class HotWater extends Beverage {
    constructor(name, composition, price) {
        super(BEVERAGES.HOT_WATER.NAME, composition, price);
    }
}

module.exports = HotWater;