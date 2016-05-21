'use strict'

const Query = require('./query')

/**
 *
 * @type {*}
 */
module.exports = class OPTIONS extends Query {

  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'OPTIONS'
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
