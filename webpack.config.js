var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
      entry: APP_DIR + '/index.jsx',
      output: {
              path: BUILD_DIR,
              filename: 'bundle.js'
            },

      plugins:[
              new webpack.DefinePlugin({
                        'process.env':{'NODE_ENV': JSON.stringify('production')}
                      }),
              
              new webpack.optimize.UglifyJsPlugin(),
              new webpack.optimize.OccurenceOrderPlugin()
            ],
      module : {
              loaders : [
                        {
                                    test : /\.jsx?/,
                                    include : APP_DIR,
                                    loader : 'babel'
                                  }
                      ]
            }
}


module.exports = config;
