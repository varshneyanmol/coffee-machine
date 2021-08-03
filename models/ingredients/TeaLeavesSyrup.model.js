const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require("../../configs/ingredients.config");

class TeaLeavesSyrup extends Ingredient {
    constructor(name, price) {
        super(name, price, INGREDIENTS.TEA_LEAVES_SYRUP.THRESHOLD_ALERT_QUANTITY)
    }
}

module.exports = TeaLeavesSyrup;