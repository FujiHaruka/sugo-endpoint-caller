const EndpointCaller = require('sugo-endpoint-caller')
const co = require('co')

co(function * () {
  let actor = new EndpointCaller({
    pathname: '/api'
  })
  let api = actor.get('greeting')
  let hello = yield api.hello({ message: 'hoge' })
  console.log(hello)
})
