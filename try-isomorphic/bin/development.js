#!/usr/bin/env node
console.log('Program started, checking webpack ... ');

var fs = require('fs')
var path = require('path')

try {
  fs.statSync(path.join(__dirname, '../dist')) 
  console.log('Found the distribution directory!');
} catch (e) {
  console.log('The app has not been built yet! Execute webpack first!')
  process.exit(0)
}

console.log('Getting into the app now ...');
require('../dist/server-bundle.js')
