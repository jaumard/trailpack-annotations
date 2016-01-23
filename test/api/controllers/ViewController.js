'use strict'
const Controller = require('trails-controller')

module.exports = class ViewController extends Controller{
  /**
   * @Route("GET /")
   * @param request
   * @param reply
   */
  helloWorld (request, reply) {
    reply('Hello')
  }
}
