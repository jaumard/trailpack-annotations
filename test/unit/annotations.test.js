'use strict'
const assert = require('assert')
const Joi = require('joi')

describe('Annotations', () => {
  describe('Route', () => {
    it('app should have three routes', (done) => {
      assert.equal(global.app.config.routes.length, 11)
      done()
    })
    it('/default/info route should exist', (done) => {
      delete global.app.config.routes[0].config
      assert.deepEqual(global.app.config.routes[0], {
        handler: 'DefaultController.info',
        method: ['GET', 'DELETE'],
        path: '/default/info'
      })
      done()
    })
    it('GET / route should exist', (done) => {
      delete global.app.config.routes[1].config
      assert.deepEqual(global.app.config.routes[1], {
        handler: 'ViewController.helloWorld',
        method: 'GET',
        path: '/'
      })
      done()
    })
    it('GET /query route should exist', (done) => {
      delete global.app.config.routes[2].config
      assert.deepEqual(global.app.config.routes[2], {
        handler: 'ViewController.get',
        method: 'GET',
        path: '/query'
      })
      done()
    })
    it('HEAD /query route should exist', (done) => {
      delete global.app.config.routes[3].config
      assert.deepEqual(global.app.config.routes[3], {
        handler: 'ViewController.head',
        method: 'HEAD',
        path: '/query'
      })
      done()
    })
    it('OPTIONS /query route should exist', (done) => {
      delete global.app.config.routes[4].config
      assert.deepEqual(global.app.config.routes[4], {
        handler: 'ViewController.options',
        method: 'OPTIONS',
        path: '/query'
      })
      done()
    })
    it('POST /query route should exist', (done) => {
      delete global.app.config.routes[5].config
      assert.deepEqual(global.app.config.routes[5], {
        handler: 'ViewController.post',
        method: 'POST',
        path: '/query'
      })
      done()
    })
    it('PUT /query route should exist', (done) => {
      delete global.app.config.routes[6].config
      assert.deepEqual(global.app.config.routes[6], {
        handler: 'ViewController.put',
        method: 'PUT',
        path: '/query'
      })
      done()
    })
    it('PATCH /query route should exist', (done) => {
      delete global.app.config.routes[7].config
      assert.deepEqual(global.app.config.routes[7], {
        handler: 'ViewController.patch',
        method: 'PATCH',
        path: '/query'
      })
      done()
    })
    it('DELETE /query route should exist', (done) => {
      delete global.app.config.routes[8].config
      assert.deepEqual(global.app.config.routes[8], {
        handler: 'ViewController.delete',
        method: 'DELETE',
        path: '/query'
      })
      done()
    })
    it('GET /validation route should exist with validation ', (done) => {
      assert.deepEqual(global.app.config.routes[9], {
        handler: 'ViewController.validation',
        method: 'GET',
        path: '/validation',
        config: {
          validate: {
            query: {
              test: Joi.string().required()
            }
          }
        }
      })
      done()
    })
    it('POST /validation route should exist with validation ', (done) => {
      assert.deepEqual(global.app.config.routes[10], {
        handler: 'ViewController.postQueryWithValidation',
        method: 'POST',
        path: '/validation',
        config: {
          validate: {
            payload: {
              test: Joi.string().required()
            }
          }
        }
      })
      done()
    })
  })

  describe('Policy', () => {
    it('app should have two policies', (done) => {
      assert(global.app.config.policies.DefaultController)
      assert(global.app.config.policies.DefaultController.info)
      assert.equal(global.app.config.policies.DefaultController.info.length, 2)
      done()
    })
    it('Auth policy exist', (done) => {
      delete global.app.config.routes[1].config
      assert.equal(global.app.config.policies.DefaultController.info[0], 'Default.auth')
      done()
    })
    it('Acl policy exist', (done) => {
      delete global.app.config.routes[1].config
      assert.equal(global.app.config.policies.DefaultController.info[1], 'Default.acl')
      done()
    })
  })
  describe('Custom', () => {
    it('app should have config.annotations.myCustomAnnotation', (done) => {
      assert(global.app.config.annotations.myCustomAnnotation)
      assert.equal(global.app.config.annotations.myCustomAnnotation, 'It\'s works')
      done()
    })
  })
})
