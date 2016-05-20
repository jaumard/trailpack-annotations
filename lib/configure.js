'use strict'

const _ = require('lodash')
const glob = require('glob')
const ecmasAnnotations = require('ecmas-annotations')
const path = require('path')

module.exports = (app, annotations) => {
  // create the registry
  const registry = new ecmasAnnotations.Registry()

  _.each(annotations, (value, key) => {
    if (app.config.annotations[key] === undefined || app.config.annotations[key]) {
      registry.registerAnnotation(value.path)
    }
  })

  const controllersFolder = app.config.annotations.pathToScan
  const pattern = controllersFolder + path.sep + '**' + path.sep + '*.js'

  const handleAnnotation = filePath => {
    return annotation => {
      // Remove controllers path
      filePath = filePath.replace(controllersFolder, '')

      if (annotation.handler) {
        annotation.handler(app, annotation)
      }
      else {
        app.log.info('No handler for annotation: ' + annotation.annotation)
      }
    }
  }

  const iterate = filePath => {
    // create the annotation reader
    const reader = new ecmasAnnotations.Reader(registry, app.config.annotations.globalContext)

    // parse the annotations from a file
    reader.parse(filePath, ecmasAnnotations.Reader.ES6)

    // get the annotations
    const definitionAnnotations = reader.definitionAnnotations
    const constructorAnnotations = reader.constructorAnnotations
    const methodAnnotations = reader.methodAnnotations
    const propertyAnnotations = reader.propertyAnnotations

    // loop through and handle the annotations
    definitionAnnotations.forEach(handleAnnotation(filePath))
    constructorAnnotations.forEach(handleAnnotation(filePath))
    methodAnnotations.forEach(handleAnnotation(filePath))
    propertyAnnotations.forEach(handleAnnotation(filePath))
  }
  const files = glob.sync(pattern, {cwd: process.cwd()})
  files.forEach(iterate)
}
