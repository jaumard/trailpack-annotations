'use strict'

const Query = require('./query')

/**
 *
 * @type {*}
 */
module.exports = class PUT extends Query {

  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'PUT'
  }

  /**
   * File path
   *
   * @type {String}
   */
  static get path() {
    return __filename
  }

}
