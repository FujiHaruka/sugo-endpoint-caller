const SugoEnpointCaller = require('./sugo_endpoint_caller')

function create (...args) {
  return new SugoEnpointCaller(...args)
}

module.exports = create
