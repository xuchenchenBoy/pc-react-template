// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  if (req.method === 'POST') {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET'

    // 匹配url,截取最后的一段param
    if (req.url) {
      splitUrl = req.url.split("/");
      req.url = "/" + splitUrl[splitUrl.length - 1];
    }

    req.query = req.body
  }
  // Continue to JSON Server router
  next()
})

server.use(router);
server.listen(3004, function () {
  console.log('JSON Server is running')
})