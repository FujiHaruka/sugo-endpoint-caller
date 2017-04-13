const Method = require('./method')

function Module (name, url) {
  let method = new Method(url, name)
  let proxyHandler = {
    get (target, name) {
      return name in target ? target[name] : method.of(name)
    }
  }
  let module_ = new Proxy({ name, url }, proxyHandler)
  return module_
}

module.exports = Module
