/**
 * NOTE: Code Architecture is explained in the README.md file
 */
const allTestCases = require("./testCases/index");
const CoffeeMachine = require('../controllers/CoffeeMachine');
const {test, expect} = require("@jest/globals");

(() => {
    try {
        allTestCases.forEach((testCase, index) => {
            const {input: testInput, output: expectedOutput, description} = testCase;

            const actualOutput = performTest(testInput);

            const testDescription = `TEST ${index + 1}: ${description}`;

            test(testDescription, () => expect(actualOutput).toEqual(expectedOutput));
        });
    } catch (err) {
        console.error(err);
        console.error("Failed to completed the unit tests");
    }
})();

function performTest(testInput) {
    const quantitiesAvailable = testInput.machine.total_items_quantity;
    const beveragesAvailable = testInput.machine.beverages;

    const coffeeMachine = new CoffeeMachine(quantitiesAvailable, beveragesAvailable);

    const beveragesToMake = testInput.machine.beverages;
    return Object.keys(beveragesToMake).map(beverageName =>
        coffeeMachine.processBeverage(beverageName, beveragesToMake[beverageName])
    );
}
