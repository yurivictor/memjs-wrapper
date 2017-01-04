/*!
 * memjs wrapper
 */
"use strict";

/**
 * Module dependencies
 * @private
 */
const memjs = require( 'memjs' );

/**
 * Expose class
 */
var Cache = exports = module.exports = class {
  /**
   * Create memjs client
   *
   * @param {object} options
   */
  constructor ( options ) {
    options = options || { expires: 60 * 30 };
    this.client = memjs.Client.create( null, options );
  }
  /**
   * Get memcache object
   *
   * @param {string} key – the memcache key to get
   * @param {function} callback – the function to pass the memjs response
   * @return {function}
   */
  get ( key, callback ) {
    return this.client.get( key, function ( err, val ) {
      if ( err ) { console.error( err ); }
      try {
        val = JSON.parse( val );
      } catch ( e ) {
        val = null;
      }
      return callback( val );
    } );
  }
  /**
   * Set memcache object
   *
   * @param {string} key – the memcache key to set
   * @param {object} json – the memcache object to set
   * @param {function} callback – the function to pass the memjs response
   */
  set ( key, json, callback ) {
    this.client.set( key, JSON.stringify( json ), callback )
  }
}
