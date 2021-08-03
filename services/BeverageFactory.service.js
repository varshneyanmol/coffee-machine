const BlackTea = require('../models/beverages/BlackTea.model');
const GreenTea = require('../models/beverages/GreenTea.model');
const HotCoffee = require('../models/beverages/HotCoffee.model');
const HotMilk = require('../models/beverages/HotMilk.model');
const HotTea = require('../models/beverages/HotTea.model');
const HotWater = require('../models/beverages/HotWater.model');

class BeverageFactory {
    static beverageNameToClassMap = {
        hot_tea: HotTea,
        hot_coffee: HotCoffee,
        black_tea: BlackTea,
        green_tea: GreenTea,
        hot_water: HotWater,
        hot_milk: HotMilk,
    }

    static createBeverage(beverageName, composition) {
        const Beverage = BeverageFactory.beverageNameToClassMap[beverageName];
        return new Beverage(beverageName, composition);
    }
}


module.exports = BeverageFactory;