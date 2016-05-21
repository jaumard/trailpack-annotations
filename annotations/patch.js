'use strict'

const Route = require('./route')

/**
 *
 * @type {*}
 */
module.exports = class PATCH extends Route {

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
