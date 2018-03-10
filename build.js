var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');
var babelify = require("babelify");
var console = require('console');

var b = browserify({
  entries: ['index.ts']})
  .plugin(watchify)
  .plugin(tsify, { target: 'es6' })
  .transform(babelify, { extensions: [ '.ts' ] })
  .on('update', bundle);

bundle();
  
function bundle() {
  console.log("Rebuilding...")
  b.bundle()
    .on('error', function(err) {
      // It would seem that certain types of errors are fine, but others will kill the process. Check the terminal if changes aren't appearing to make sure you see it was rebuilt. If not, restart the process. Super frustrating. https://github.com/browserify/watchify/issues/323
      console.log(err.message);
      this.emit('end');
    })
    .pipe(fs.createWriteStream('bundle.js'));
}