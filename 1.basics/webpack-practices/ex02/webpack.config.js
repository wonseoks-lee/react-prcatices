const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    ontput: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    }
}