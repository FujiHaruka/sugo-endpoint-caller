const Hub = require('sugo-hub')
const Actor = require('sugo-actor')
const { Module } = Actor
const endpointActor = require('sugo-endpoint-actor')
const EndpointCaller = require('../lib')
const { equal } = require('assert')
const co = require('co')
const asleep = require('asleep')

describe('SugoEnpointCaller', function () {
  this.timeout(10000)
  let port = 3333
  let hub
  before(() => co(function * () {
    let actor = Actor({
      key: 'http',
      modules: {
        greeting: new Module({
          sayHello ({ message }) {
            return `Hello! ${message}`
          }
        })
      }
    })
    hub = Hub({
      endpoints: {
        '/api/:module/:method': {
          POST: endpointActor(actor)
        }
      }
    })
    yield hub.listen(port)
    yield asleep(1000)
  }))

  after(() => co(function * () {
    yield asleep(100)
    hub.close()
  }))

  it('', () => co(function * () {
    let actor = new EndpointCaller({
      port,
      pathname: '/api'
    })
    let api = actor.get('greeting')
    let hello = yield api.sayHello({ message: 'hoge' })
    equal(hello, 'Hello! hoge')
  }))
})

/* global describe it before after */
