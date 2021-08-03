const input = {
    "machine": {
        "outlets": {
            "count_n": 4
        },
        "total_items_quantity": {
            "hot_water": 5000,
            "hot_milk": 5000,
            "ginger_syrup": 1000,
            "sugar_syrup": 1000,
            "tea_leaves_syrup": 1000,
            "green_mixture": 100,
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
    'black_tea is prepared',
    'green_tea is prepared',
];

const testCase = {
    input: input,
    output: output,
    description:
        "Machine has enough inventory to make all beverages.",
};

module.exports = testCase;
