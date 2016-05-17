'use strict'
const Annotation = require('ecmas-annotations').Annotation

module.exports = class MyCustomAnnotation extends Annotation{

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
    app.config.annotations.myCustomAnnotation = annotation.value
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
