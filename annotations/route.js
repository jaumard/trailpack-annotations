'use strict'

const Annotation = require('ecmas-annotations').Annotation
const _ = require('lodash')

/**
 *
 * @type {*}
 */
module.exports = class Route extends Annotation {

  /**
   * The possible targets
   *
   * (Annotation.CONSTRUCTOR, Annotation.PROPERTY, Annotation.METHOD)
   *
   * @type {Array}
   */
  static get targets() {
    return [Annotation.METHOD]
  }


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
      if (this.query) infos.method = this.query
    }
    else {
      const parts = annotation.value.split(' ')
      infos = {
        method: this.query || parts[0],
        path: this.query ? parts[0] : parts[1],
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
