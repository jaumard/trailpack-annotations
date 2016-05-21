'use strict'

const Query = require('./query')

/**
 *
 * @type {*}
 */
module.exports = class DELETE extends Query {


  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'DELETE'
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
