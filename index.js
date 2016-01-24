'use strict'

const configure = require('./lib').Configure
const Trailpack = require('trailpack')
const _ = require('lodash')

module.exports = class AnnotationsTrailpack extends Trailpack {

  /**
   * Search for annotations and configure routes/policies found
   */
  configure() {
    if (this.app.config.annotations && !this.app.config.annotations.customAnnotations) {
      this.app.config.annotations.customAnnotations = {}
    }
    this.app.config.annotations = _.merge(require('./config/annotations'), this.app.config.annotations || {})
    configure(this.app, this.app.config.annotations.customAnnotations)

    return Promise.resolve()
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      pkg: require('./package')
    })
  }
}

