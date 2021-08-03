const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require('../../configs/ingredients.config');

class Milk extends Ingredient {
    /**
     * have added temperature as private property to milk,
     * which can be helpful to determine/keep hot, cold or room-temperature milk as separate ingredients
     */
    #temperature;

    constructor(name, price, temperature) {
        super(name, price, INGREDIENTS.MILK.THRESHOLD_ALERT_QUANTITY);
        this.#temperature = !isNaN(temperature) && temperature != null
            ? temperature
            : INGREDIENTS.MILK.ROOM_TEMPERATURE;
    }

    get temperature() {
        return this.#temperature;
    }

    set temperature(value) {
        this.#temperature = value;
    }
}

module.exports = Milk;