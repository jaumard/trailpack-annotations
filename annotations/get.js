'use strict'

const Query = require('./query')

/**
 *
 * @type {*}
 */
module.exports = class GET extends Query {

  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'GET'
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
