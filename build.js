var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');
var babelify = require("babelify");

var b = browserify({
  entries: ['index.ts']})
  .plugin(watchify)
  .plugin(tsify, { target: 'es6' })
  .transform(babelify, { extensions: [ '.ts' ] })
  .on('update', bundle);

bundle();
  
function bundle() {
  b.bundle().pipe(fs.createWriteStream('bundle.js'));
}