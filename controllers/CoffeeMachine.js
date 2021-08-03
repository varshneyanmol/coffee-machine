const IngredientInventoryService = require('../services/IngredientInventory.service');
const BeverageCompositionValidator = require('../services/BeverageCompositionValidator.service');
const Outlet = require('./Outlet');

class CoffeeMachine {
    #ingredientInventory;
    #beverageCompositionValidator;
    #outlet;

    constructor(quantitiesAvailable, beveragesAvailable) {
        this.init(quantitiesAvailable, beveragesAvailable);
    }

    init(quantitiesAvailable, beveragesAvailable) {
        this.#ingredientInventory = new IngredientInventoryService(quantitiesAvailable);
        this.#beverageCompositionValidator = new BeverageCompositionValidator(beveragesAvailable);

        this.#outlet = new Outlet(this.#ingredientInventory, this.#beverageCompositionValidator);
    }

    processBeverage(beverageName, compositionInput) {
        try {
            return this.#outlet.make(beverageName, compositionInput);
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = CoffeeMachine;