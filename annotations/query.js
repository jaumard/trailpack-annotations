'use strict'

const Route = require('./route')
const _ = require('lodash')

/**
 *
 * @type {*}
 */
module.exports = class Query extends Route {

  /**
   * The function to call when annotations are find
   *
   * @type {Function}
   */
  handler(app, annotation) {
    let infos = {}


    if (!annotation.className) {
      annotation.className = _.last(annotation.filePath.split('/')).replace('.js', '')
    }

    if (_.isObject(annotation.value)) {
      infos = annotation.value
      infos.handler = annotation.className + '.' + annotation.target
      infos.method = this.query
    }
    else {
      const parts = annotation.value.split(' ')
      infos = {
        method: this.query,
        path: parts[0],
        handler: annotation.className + '.' + annotation.target
      }
    }

    app.config.routes.push(infos)
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
