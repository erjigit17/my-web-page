const fs = require('fs')
const http = require('http')
const path = require('path')

const port = process.env.PORT || 5000

http
  .createServer(function (req, res) {
    if (req.url === '/') {
      fs.readFile('./www/index.html', 'UTF-8', function (err, html) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html)
      })
    } else if (req.url.match('.css$')) {
      var cssPath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(cssPath, 'UTF-8')
      res.writeHead(200, { 'Content-Type': 'text/css' })
      fileStream.pipe(res)
    } else if (req.url.match('.avif$')) {
      var imagePath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/avif' })
      fileStream.pipe(res)
    } else if (req.url.match('.js$')) {
      var imagePath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'text/javascript' })
      fileStream.pipe(res)
    } else if (req.url.match('.webp$')) {
      var imagePath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/webp' })
      fileStream.pipe(res)
    } else if (req.url.match('.png$')) {
      var imagePath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/png' })
      fileStream.pipe(res)
    } else if (req.url.match('.jpg$')) {
      var imagePath = path.join(__dirname, 'www', req.url)
      var fileStream = fs.createReadStream(imagePath)
      res.writeHead(200, { 'Content-Type': 'image/jpg' })
      fileStream.pipe(res)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end('No Page Found')
    }
  })
  .listen(port)
