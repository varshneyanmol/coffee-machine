const fs = require("fs");
const path = require("path");

//Getting all the test files dynamically
module.exports = fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.startsWith('test') && file.slice(-3) === ".js"
    )
    .map((file) => {
        const filePath = path.join(__dirname, file);
        return require(filePath);
    });