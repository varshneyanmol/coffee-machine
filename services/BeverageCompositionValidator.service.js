const IngredientFactory = require('./IngredientFactory.service');
const BeverageFactory = require('./BeverageFactory.service');

class BeverageCompositionValidator {
    #beverageIngredientsMap;

    constructor(beveragesAvailable) {
       this.init(beveragesAvailable)
    }

    init(beveragesAvailable) {
        this.#beverageIngredientsMap = new Map();
        Object.keys(beveragesAvailable).forEach((beverageName) => {

            const BeverageClass = BeverageFactory.beverageNameToClassMap[beverageName];
            Object.keys(beveragesAvailable[beverageName]).forEach(ingredientName => {
                this.addIngredient(BeverageClass, IngredientFactory.ingredientNameToClassMap[ingredientName])
            });

        });
    }

    addIngredient(beverageType, ingredientType) {
        if (!this.#beverageIngredientsMap.has(beverageType))
            this.#beverageIngredientsMap.set(beverageType, []);

        this.#beverageIngredientsMap.get(beverageType).push(ingredientType);

        return this;
    }

    remove() {

    }

    isCompositionValid(beverageType, requestedComposition) {
        if (!this.#beverageIngredientsMap.has(beverageType))
            return false;

        const beverageIngredients = this.#beverageIngredientsMap.get(beverageType);

        for (const ingredient of requestedComposition.ingredientsMap.keys()) {
            if (!this.isIngredientPresent(ingredient, beverageIngredients)) {
                return false;
            }
        }

        return true;
    }

    isIngredientPresent(requestedIngredient, ingredientsList) {
        return ingredientsList.findIndex(Ingredient => requestedIngredient instanceof Ingredient) > -1;
    }
}

module.exports = BeverageCompositionValidator;