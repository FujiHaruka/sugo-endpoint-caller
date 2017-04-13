const Module = require('./module')
const { get } = require('bwindow')
const { format } = require('url')

class SugoEnpointCaller {
  constructor (config) {
    let {
      protocol = get('location.protocol') || 'http',
      host = undefined,
      port = get('location.port') || 80,
      hostname = get('location.hostname') || 'localhost',
      pathname = '/'
    } = config

    this.url = format({
      protocol,
      host,
      port,
      hostname,
      pathname
    })
  }

  get (name) {
    return Module(name, this.url)
  }
}

module.exports = SugoEnpointCaller
