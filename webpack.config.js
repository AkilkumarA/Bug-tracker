var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'client');

module.exports = {
    entry: APP_DIR+"/index.js",
    output: {
        path: path.resolve(__dirname, BUILD_DIR),
        filename: "bundle.js"        
    },
    module : {
        loaders : [
          {
            test: /\.(js|jsx)$/,
            include : APP_DIR,
            loader : 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
    },  
    resolve: {
        extensions: ['.js', '.jsx']
    }
}    
