/**
 * render.js 为 res 对象提供一个 render 渲染函数
 * 目的是为了渲染 views 中的页面更方便
 */

var fs = require('fs')
var path = require('path')
var template = require('art-template')

module.exports = function (res) {
  res.render = function (templateName, obj) {
    var templatePath = path.join(__dirname, './views/' + templateName + '.html')
    fs.readFile(templatePath, function (err, data) {
      if (err) {
        return res.end('Can not find templte ' + templateName)
      }
      var result = template.compile(data.toString())(obj || {})
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end(result)
    })
  }
}
