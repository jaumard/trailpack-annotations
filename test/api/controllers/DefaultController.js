'use strict'
const Controller = require('trails-controller')

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Trails app
 * @see {@link http://trailsjs.io/doc/api/controllers}
 * @this TrailsApp
 */
module.exports = class DefaultController extends Controller{
  /**
   * @Route({method: ["GET", "DELETE"], path: "/default/info"})
   * @Policy("Default.auth")
   * @Policy(["Default.acl"])
   * @MyCustomAnnotation("It's works")
   * @param request
   * @param reply
   */
  info (request, reply) {
    reply('ok')
  }
}
