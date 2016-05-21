'use strict'

const Query = require('./query')
const _ = require('lodash')

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
