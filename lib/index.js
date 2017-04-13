const create = require('./create')
const SugoEnpointCaller = require('./sugo_endpoint_caller')

let lib = create.bind(this)

Object.assign(lib, SugoEnpointCaller, {
  create,
  SugoEnpointCaller
})

module.exports = lib
