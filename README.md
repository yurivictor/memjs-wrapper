# memjs wrapper

A simple set/get wrapper for using json with [memjs](https://www.npmjs.com/package/memjs).

## Quick start

Add it to your project:

```bash
$ npm install --save https://github.com/yurivictor/memjs-wrapper.git
```

Get and set some stuff:

```js
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
```

## Example

To view the example, clone the repo and install the dependencies:

```bash
$ git clone git://github.com/yurivictor/memjs-wrapper.git
$ cd memjs-wrapper
$ npm install
```

Then run the example:

```bash
$ node example.js
```

## Using memcache

#### On Heroku

Add to existing heroku dyno:

`heroku addons:create memcachier:dev`

#### Locally

Make sure you have memcached installed.

MacOS:
`brew install memcached`

Then run memcache:

`memcached -v`

## People

The original author is [@yurivictor](https://github.com/yurivictor).

## License

[BSD](LICENSE)

---

[back to top](#memjs-wrapper)
