const BeverageFactory = require('../services/BeverageFactory.service');
const {InsufficientMaterialError} = require('../core/errors/Errors');

class Outlet {
    #ingredientInventory;

    constructor(ingredientInventory) {
        this.#ingredientInventory = ingredientInventory;
    }


    make(beverageName, composition) {
        const beverage = BeverageFactory.createBeverage(beverageName, composition);

        composition = beverage.composition;

        this.validateAllIngredientsPresent(beverage, composition);
        this.validateAllIngredientsAreSufficient(beverage, composition);

        for (const [ingredient, quantity] of composition.ingredientsMap) {
            this.#ingredientInventory.getIngredient(ingredient, quantity);
        }

        return `${beverage.name} is prepared`;
    }

    validateAllIngredientsPresent(beverage, composition) {
        for (const ingredient of composition.ingredientsMap.keys()) {
            if (!this.#ingredientInventory.isIngredientPresent(ingredient)) {
                throw new InsufficientMaterialError(`${beverage.name} can not be prepared because ${ingredient.name} is not available`);
            }
        }

        return true;
    }

    validateAllIngredientsAreSufficient(beverage, composition) {
        for (const [ingredient, quantity] of composition.ingredientsMap) {
            if (!this.#ingredientInventory.isIngredientSufficient(ingredient, quantity)) {
                throw new InsufficientMaterialError(`${beverage.name} can not be prepared because ${ingredient.name} is not sufficient`);
            }
        }

        return true;
    }

}

module.exports = Outlet;