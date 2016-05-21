'use strict'

const Route = require('./route')

/**
 *
 * @type {*}
 */
module.exports = class POST extends Route {


  constructor(data, filePath) {
    super(data, filePath)
    this.query = 'POST'
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
