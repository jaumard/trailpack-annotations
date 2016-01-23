'use strict'

const configure = require('./lib').Configure
const Trailpack = require('trailpack')
const _ = require('lodash')

module.exports = class AnnotationsTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate() {

  }

  /**
   * TODO document method
   */
  configure() {
    if (this.app.config.annotations && !this.app.config.annotations.customAnnotations) {
      this.app.config.annotations.customAnnotations = {}
    }
    this.app.config.annotations = _.merge(require('./config/annotations'), this.app.config.annotations || {})
    configure(this.app, this.app.config.annotations.customAnnotations)

    return Promise.resolve()
  }

  /**
   * TODO document method
   */
  initialize() {

  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

