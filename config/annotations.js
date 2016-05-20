'use strict'

const Joi = require('joi')
module.exports = {
  policy: true,
  route: true,
  globalContext: {
    Joi: Joi
  },
  pathToScan: './api/controllers',
  customAnnotations: require('../annotations')
}
