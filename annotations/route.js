'use strict'

const Annotation = require('ecmas-annotations').Annotation
const _ = require('lodash')

/**
 *
 * @type {*}
 */
module.exports = Annotation.extend({

  /**
   * The name of the annotation

   * @type {String}
   */
  annotation: 'Route',

  /**
   * The possible targets
   *
   * (Annotation.CONSTRUCTOR, Annotation.PROPERTY, Annotation.METHOD)
   *
   * @type {Array}
   */
  targets: [Annotation.METHOD],

  /**
   * The main value
   *
   * @type {String}
   */
  value: '',

  /**
   * The function to call when annotations are find
   *
   * @type {Function}
   */
  handler: (app, annotation) => {
    let infos = {}

    if (!annotation.className) {
      annotation.className = _.last(annotation.filePath.split('/')).replace('.js', '')
    }

    if (_.isObject(annotation.value)) {
      infos = annotation.value
      infos.handler = annotation.className + '.' + annotation.target
    }
    else {
      const parts = annotation.value.split(' ')
      infos = {
        method: parts[0],
        path: parts[1],
        handler: annotation.className + '.' + annotation.target
      }
    }

    app.config.routes.push(infos)
  },

  /**
   * File path
   *
   * @type {String}
   */
  path: '../annotations/route'

})
