'use strict'

const Route = require('./route')

/**
 *
 * @type {*}
 */
module.exports = class DELETE extends Route {

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
