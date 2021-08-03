# Coffee-Machine

- 

# Code Architecture

- `Ingredient` is the base model which is subclassed by other ingredients like `Water`, `Milk`, `GingerSyrup` etc.
    - Any required property can be added to the base model or to any of its subclass, depending on the requirement, like, adding `temperature` property to `Water` etc.
    - These classes can further be subclassed to give better flexibility like keeping `HotMilk` and `ColdMilk` as separate ingredients by subclassing Milk.
    - **Every type of ingredient has its own `THRESHOLD_ALERT_QUANTITY` variable which implies that if the quantity of this beverage even falls below this threshold then sendAlter to the admin.**
- `Beverage` is the base model which is subclassed by other beverages like `HotTea`, `GreenTea`, `HotCoffee` etc.
    - Along with `name`, each beverage has a `composition` which is describe below
- `BeverageComposition` is the map of `ingredient` to its `quantity` needed, that the beverage demands. So, we can have two hot_coffees with same ingredients but different compositions of those ingredients.
- `IngredientInventory` is the service which is initialized at the time of creating `CoffeeMachine` and keeps a map of all the ingredients present and their available quantities. It performs following:
    - display the current state of inventory
    - provide the caller with `requestedQuantity` of `ingredient`, if available
    - Refill inventory
    - Send/Display alert to admin of ingredients running low on quantity
- `BeverageCompositionValidator` is the service which is initialized at the time of creating `CoffeeMachine` and keeps map of what required ingredients for a beverage. it performs following:
    - validates if the requested beverage can be made with the requested ingredients.
- `IngredientFactory` is the factory to provide new objects of Ingredients by their names. Example:
    - return `new GingerSyrup()` given 'ginger_syrup'
- `BeverageFactory` is the factory to provide new objects of Beverages by their names. Example:
    - return `new HotTea()` given 'hot_tea'
- `Outlet` is the outlet that belongs to a `CoffeeMachine`. **It's `Outlet`'s job to create a beverage with given composition**. It performs following:
    - First checks with the `BeverageCompositionValidator` if the composition requested has same ingredients as are required to make the requested beverage
    - Then checks with `IngredientInventory` if all the ingredients are available in the inventory
    - Again checks with `IngredientInventory` if all the ingredients are present in the sufficient quantity in the inventory
    - Then fetches the ingredients from the `IngredientInventory`
    - returns the created `beverage`
    - throws the corresponding error if something goes unexpected in any of the steps
- `CoffeMaker` is the main class that interacts with the outer world. It performs following:
    - Initialized `IngredientInventory` and `BeverageCompositionValidator`
    - Creates its `outlet` to make beverages
    - takes request from the outer world to create a beverage with the given composition and delegates it to the `outlet`
    

## How to execute?

- Open up a terminal :
- Install dependencies: `npm install`
- To run test cases : `npm test`
- To try out with example input : `npm start`


## Sample input

```
{
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
}
```

## Sample Output

```
[
    'hot_tea is prepared',
    'hot_coffee is prepared',
    'black_tea can not be prepared because hot_water is not sufficient',
    'green_tea can not be prepared because green_mixture is not available',
]
```
