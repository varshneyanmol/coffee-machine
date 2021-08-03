class BeverageComposition {
    #ingredientsMap;

    constructor() {
        this.#ingredientsMap = new Map();
    }

    get ingredientsMap() {
        return this.#ingredientsMap;
    }

    addIngredient(ingredient, quantity) {
        this.#ingredientsMap.set(ingredient, quantity);
        return this;
    }
}

module.exports = BeverageComposition;