// Require the library
var Cache = require( 'memjs-wrapper' );

// Initiate the client
var cache = new Cache();

// Set a json object
cache.set( 'hello', { who_am_i: "you" }, show_results );

// Get a json object
cache.get( 'hello', show_results );

// Show results
function show_results ( val ) {
  console.log( val );
}
