const hook = require('css-modules-require-hook');
const isDev = !process || process.env.NODE_ENV !== 'production';

let localIdentName = '[local]__[hash:base64:8]'

if (!isDev) {
  localIdentName = '[hash:base64:8]'
}

hook({
  extensions: ['.css'],
  generateScopedName: localIdentName
})

require('babel-register');
require('./server');
