const Ingredient = require("./Ingredient.model");
const {INGREDIENTS} = require('../../configs/ingredients.config');

class Water extends Ingredient {
    /**
     * have added temperature as private property to water,
     * which can be helpful to determine/keep hot, cold or room-temperature water as separate ingredients
     */
    #temperature;

    constructor(name, price, temperature) {
        super(name, price, INGREDIENTS.WATER.THRESHOLD_ALERT_QUANTITY);
        this.#temperature = !isNaN(temperature) && temperature != null
            ? temperature
            : INGREDIENTS.WATER.ROOM_TEMPERATURE;
    }

    get temperature() {
        return this.#temperature;
    }

    set temperature(value) {
        this.#temperature = value;
    }
}

module.exports = Water;