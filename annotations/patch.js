'use strict'

const Query = require('./query')

/**
 *
 * @type {*}
 */
module.exports = class PATCH extends Query {

  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'PATCH'
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
