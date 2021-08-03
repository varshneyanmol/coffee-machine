const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require("../../configs/ingredients.config");

class GingerSyrup extends Ingredient {
    constructor(name, price) {
        super(name, price, INGREDIENTS.GINGER_SYRUP.THRESHOLD_ALERT_QUANTITY);
    }
}

module.exports = GingerSyrup;