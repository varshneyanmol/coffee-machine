const Milk = require('../models/ingredients/Milk.model');
const Water = require('../models/ingredients/Water.model');
const GingerSyrup = require('../models/ingredients/GingerSyrup.model');
const SugarSyrup = require('../models/ingredients/SugarSyrup.model');
const TeaLeavesSyrup = require('../models/ingredients/TeaLeavesSyrup.model');
const GreenMixture = require('../models/ingredients/GreenMixture.model');

class IngredientFactory {
    static ingredientNameToClassMap = {
        hot_water: Water,
        hot_milk: Milk,
        ginger_syrup: GingerSyrup,
        sugar_syrup: SugarSyrup,
        tea_leaves_syrup: TeaLeavesSyrup,
        green_mixture: GreenMixture,
    }

    static createIngredient(ingredientName) {
        const Ingredient = IngredientFactory.ingredientNameToClassMap[ingredientName];
        return new Ingredient(ingredientName);
    }
}


module.exports = IngredientFactory;