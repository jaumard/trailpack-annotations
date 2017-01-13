'use strict'
const Controller = require('trails/controller')

module.exports = class ViewController extends Controller {
  /**
   * @Route("GET /")
   * @param request
   * @param reply
   */
  helloWorld(request, reply) {
    reply('Hello')
  }

  /**
   * @GET("/query")
   * @param request
   * @param reply
   */
  get(request, reply) {
    reply('Hello')
  }

  /**
   * @HEAD("/query")
   * @param request
   * @param reply
   */
  head(request, reply) {
    reply('Hello')
  }


  /**
   * @OPTIONS("/query")
   * @param request
   * @param reply
   */
  options(request, reply) {
    reply('Hello')
  }


  /**
   * @POST("/query")
   * @param request
   * @param reply
   */
  post(request, reply) {
    reply('Hello')
  }


  /**
   * @PUT("/query")
   * @param request
   * @param reply
   */
  put(request, reply) {
    reply('Hello')
  }

  /**
   * @PATCH("/query")
   * @param request
   * @param reply
   */
  patch(request, reply) {
    reply('Hello')
  }

  /**
   * @DELETE("/query")
   * @param request
   * @param reply
   */
  delete(request, reply) {
    reply('Hello')
  }

  /**
   * @Route({method: "GET", path: "/validation", config: { validate: {
   * query: { test: Joi.string().required() }
   * }}})
   * @param request
   * @param reply
   */
  validation(request, reply) {
    reply('Hello')
  }


  /**
   * @POST({path:"/validation", config: { validate: {
   * payload: { test: Joi.string().required() }
   * }}})
   * @param request
   * @param reply
   */
  postQueryWithValidation(request, reply) {
    reply('Hello')
  }


}
