'use strict'
const assert = require('assert')

describe('Annotations', () => {
  describe('Route', () => {
    it('app should have two routes', (done) => {
      assert.equal(global.app.config.routes.length, 2)
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
    it('/ route should exist', (done) => {
      delete global.app.config.routes[1].config
      assert.deepEqual(global.app.config.routes[1], {
        handler: 'ViewController.helloWorld',
        method: 'GET',
        path: '/'
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
