const input = {
    "machine": {
        "outlets": {
            "count_n": 4
        },
        "total_items_quantity": {
            "hot_water": 500,
            "hot_milk": 500,
            "ginger_syrup": 100,
            "sugar_syrup": 100,
            "tea_leaves_syrup": 100
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
    'hot_tea is prepared',
    'hot_coffee is prepared',
    'black_tea can not be prepared because hot_water is not sufficient',
    'green_tea can not be prepared because green_mixture is not available',
];

const testCase = {
    input: input,
    output: output,
    description:
        "Input same as given with the assignment.",
};

module.exports = testCase;
