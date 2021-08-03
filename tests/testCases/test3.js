const input = {
    "machine": {
        "outlets": {
            "count_n": 4
        },
        "total_items_quantity": {
            "hot_water": 10,
            "hot_milk": 5,
            "ginger_syrup": 1,
            "sugar_syrup": 5,
            "tea_leaves_syrup": 2,
            "green_mixture": 1,
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
    'hot_tea can not be prepared because hot_water is not sufficient',
    'hot_coffee can not be prepared because hot_water is not sufficient',
    'black_tea can not be prepared because hot_water is not sufficient',
    'green_tea can not be prepared because hot_water is not sufficient',
];

const testCase = {
    input: input,
    output: output,
    description:
        "Machine is very low on inventory to make any beverage.",
};

module.exports = testCase;
