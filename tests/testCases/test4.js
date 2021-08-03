const input = {
    "machine": {
        "outlets": {
            "count_n": 4
        },
        "total_items_quantity": {
            "hot_water": 10,
        },
        "beverages": {
            "hot_tea": {
                "hot_water": 200,
                "hot_milk": 100,
                "ginger_syrup": 10,
                "sugar_syrup": 10,
                "tea_leaves_syrup": 30
            },
            "hot_coffee": {
                "hot_water": 100,
                "ginger_syrup": 30,
                "hot_milk": 400,
                "sugar_syrup": 50,
                "tea_leaves_syrup": 30
            },
            "black_tea": {
                "hot_water": 300,
                "ginger_syrup": 30,
                "sugar_syrup": 50,
                "tea_leaves_syrup": 30
            },
            "green_tea": {
                "hot_water": 100,
                "ginger_syrup": 30,
                "sugar_syrup": 50,
                "green_mixture": 30
            },
        }
    }
};

const output = [
    'hot_tea can not be prepared because hot_milk is not available',
    'hot_coffee can not be prepared because ginger_syrup is not available',
    'black_tea can not be prepared because ginger_syrup is not available',
    'green_tea can not be prepared because ginger_syrup is not available',
];

const testCase = {
    input: input,
    output: output,
    description:
        "Inventory has only hot_water, so no beverage can be made.",
};

module.exports = testCase;
