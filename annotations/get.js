'use strict'

const Route = require('./route')

/**
 *
 * @type {*}
 */
module.exports = class GET extends Route {

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
