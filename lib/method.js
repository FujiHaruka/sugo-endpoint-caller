const request = require('request-promise')
const Case = require('case')

class Method {
  constructor (url, moduleName) {
    this.url = url
    this.moduleName = moduleName
    this.method = {}
  }

  of (name) {
    let method = this.method[name]
    if (method) {
      return method
    } else {
      this.method[name] = this.createMethod(name)
      return this.method[name]
    }
  }

  createMethod (name) {
    let url = `${this.url}/${this.moduleName}/${Case.kebab(name)}`
    return (arg) => request({
      url,
      method: 'POST',
      json: true,
      body: arg
    })
  }
}

module.exports = Method
