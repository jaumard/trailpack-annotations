'use strict'

const Route = require('./route')

/**
 *
 * @type {*}
 */
module.exports = class HEAD extends Route {

  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'HEAD'
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
