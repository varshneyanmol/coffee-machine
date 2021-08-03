const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require("../../configs/ingredients.config");

class SugarSyrup extends Ingredient {
    constructor(name, price) {
        super(name, price, INGREDIENTS.SUGAR_SYRUP.THRESHOLD_ALERT_QUANTITY)
    }
}

module.exports = SugarSyrup;