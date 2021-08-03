const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require("../../configs/ingredients.config");

class GreenMixture extends Ingredient {
    constructor(name, price) {
        super(name, price, INGREDIENTS.GREEN_MIXTURE.THRESHOLD_ALERT_QUANTITY);
    }
}

module.exports = GreenMixture;