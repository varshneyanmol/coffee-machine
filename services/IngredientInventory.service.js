const Ingredient = require("../models/ingredients/Ingredient.model");
const IngredientFactory = require('../services/IngredientFactory.service');
const {BadRequestError, InvalidParamError} = require('../core/errors/Errors')

class IngredientInventoryService {
    #inventoryMap;

    constructor(quantitiesAvailable) {
        this.init(quantitiesAvailable);
    }

    init(quantitiesAvailable) {
        this.#inventoryMap = new Map();
        Object.keys(quantitiesAvailable).forEach((ingredientName) => {

            const ingredient = IngredientFactory.createIngredient(ingredientName);
            this.addIngredient(ingredient, quantitiesAvailable[ingredientName])

        });
    }

    /**
     * this function can be used to:
     * 1. add any ingredient for the first time
     * 2. Refill ingredient
     * @param ingredient any number of times
     * @param quantity
     */
    addIngredient(ingredient, quantity) {
        this.isValid(ingredient, quantity);

        let inventoryIngredient = this.getCorrespondingIngredientObject(ingredient.name)

        if (!inventoryIngredient) {
            inventoryIngredient = ingredient;
            this.#inventoryMap.set(inventoryIngredient, 0);
        }

        this.#inventoryMap.set(
            inventoryIngredient,
            this.#inventoryMap.get(inventoryIngredient) + quantity
        );
    }

    isValid(ingredient, quantity) {
        if (!(ingredient instanceof Ingredient))
            throw new InvalidParamError('Invalid ingredient type');

        if (isNaN(quantity) || quantity === null || quantity < 0)
            throw new BadRequestError('Invalid ingredient quantity');
    }

    getCorrespondingIngredientObject(ingredientName) {
        for (const ingredient of this.#inventoryMap.keys()) {
            if (ingredientName === ingredient.name)
                return ingredient;
        }
    }

    isIngredientPresent(ingredient) {
        const inventoryIngredient = this.getCorrespondingIngredientObject(ingredient.name);
        return !!inventoryIngredient
    }

    isIngredientSufficient(ingredient, requestedQuantity) {
        const inventoryIngredient = this.getCorrespondingIngredientObject(ingredient.name);
        if (!inventoryIngredient)
            return false;

        let availableQuantity = this.#inventoryMap.get(inventoryIngredient);
        return availableQuantity >= requestedQuantity;
    }

    getIngredient(ingredient, requestedQuantity) {
        const inventoryIngredient = this.getCorrespondingIngredientObject(ingredient.name);
        let availableQuantity = this.#inventoryMap.get(inventoryIngredient);

        availableQuantity = availableQuantity - requestedQuantity;
        this.#inventoryMap.set(inventoryIngredient, availableQuantity);

        if (availableQuantity <= inventoryIngredient.thresholdAlertQuantity) {
            // this.sendAlert(inventoryIngredient, availableQuantity);
            /**
             * we can call sendAlert() from here and notify admin for low running quantity of this ingredient.
             */
        }

        return true;
    }

    sendAlert(ingredient, availableQuantity) {
        console.log(`${ingredient.name} running low on quantity with only ${availableQuantity} left. Please refill.`);
    }

    /**
     * This is an indicator function that can be called anytime to send alert to admin or on display
     * to show all the ingredients that are running low on quantity;
     */
    sendAlertForLowRunningIngredients() {
        for (const [ingredient, availableQuantity] of this.#inventoryMap) {
            if (availableQuantity <= ingredient.thresholdAlertQuantity) {
                this.sendAlert(ingredient, availableQuantity);
            }
        }
    }

    displayInventory() {
        console.log('\n------------------------------');
        this.#inventoryMap.forEach((quantity, ingredient) => {
            console.log(`${ingredient.name} available quantity: ${quantity}`);
        });
        console.log('------------------------------\n');
    }
}

module.exports = IngredientInventoryService;