const {input} = require('./tests/testCases/test1');
const CoffeeMachine = require('./controllers/CoffeeMachine');

const quantitiesAvailable = input.machine.total_items_quantity;
const beveragesAvailable = input.machine.beverages;

const coffeeMachine = new CoffeeMachine(quantitiesAvailable, beveragesAvailable);

const beveragesToMake = input.machine.beverages;
const output = Object.keys(beveragesToMake).map(beverageName =>
    coffeeMachine.processBeverage(beverageName, beveragesToMake[beverageName])
)

console.log(output);