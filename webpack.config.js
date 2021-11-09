const path = require('path')
module.exports = {
    mode:"production",
    devtool: 'source-map',
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        filename:'pathfinding.umd.js',
        library: 'pathfinding',
    }

}