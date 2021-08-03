const IngredientInventoryService = require('../services/IngredientInventory.service');
const BeverageCompositionValidator = require('../services/BeverageCompositionValidator.service');
const BeverageFactory = require('../services/BeverageFactory.service');
const CompositionService = require('../services/Composition.service');
const Outlet = require('./Outlet');

const {BadRequestError} = require('../core/errors/Errors');

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

        this.#outlet = new Outlet(this.#ingredientInventory);
    }

    processBeverage(beverageName, compositionInput) {
        let msg;
        try {
            const BeverageType = BeverageFactory.beverageNameToClassMap[beverageName];
            const composition = CompositionService.createComposition(compositionInput);

            if (!this.#beverageCompositionValidator.isCompositionValid(BeverageType, composition))
                throw new BadRequestError('Invalid Composition requested');

            msg = this.#outlet.make(beverageName, composition);

        } catch (err) {
            msg = err.message;
        }

        return msg;
    }
}

module.exports = CoffeeMachine;