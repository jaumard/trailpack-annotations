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
  annotation: 'Policy',

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

    if (!annotation.className) {
      annotation.className = _.last(annotation.filePath.split('/')).replace('.js', '')
    }
    const policies = app.config.policies
    if (!policies[annotation.className]) {
      policies[annotation.className] = {}
    }

    if (!policies[annotation.className][annotation.target]) {
      policies[annotation.className][annotation.target] = []
    }

    if (_.isArray(annotation.value)) {
      policies[annotation.className][annotation.target] = policies[annotation.className][annotation.target].concat(annotation.value)
    }
    else {
      policies[annotation.className][annotation.target].push(annotation.value)
    }
  },

  /**
   * File path
   *
   * @type {String}
   */
  path: '../annotations/policy.js'

})
