const IngredientFactory = require('./IngredientFactory.service');
const BeverageComposition = require('../models/compositions/BeverageComposition.model');

class CompositionService {
    static createComposition(compositionInput) {
        const composition = new BeverageComposition();

        Object.keys(compositionInput).forEach(ingredientName => {
            const ingredient = IngredientFactory.createIngredient(ingredientName);
            composition.addIngredient(ingredient, compositionInput[ingredientName])
        });

        return composition;
    }
}

module.exports = CompositionService;