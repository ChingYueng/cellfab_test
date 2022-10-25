const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')
const open = require('open')
const fs = require('fs')
const {url, token, bucket, org} = require('../env')
const monitor = require('./monitor')
const { fstat, fstatSync } = require('fs')

const port = 3001
const proxyPath = '/influx'

const app = express()
// monitor express response time in InfluxDB
monitor(app)
// serve all files of the git repository
//app.use(express.static(path.join(__dirname, '..', '..'), {index: false}))

const env_browser = "env_browser.js"
app.get("/" + env_browser, function(req, res) {
  fs.readFile(env_browser, 'utf8', (err, data) => {
    data = data.replace('%TOKEN%', token)
    data = data.replace('%ORG%', org)
    data = data.replace('%BUCKET%', bucket)
    res.setHeader('content-type', 'text/javascript')
    res.send(data)
  })
})
app.use(express.static(path.join(__dirname, '..'), {index: false}))
// create also proxy to InfluxDB
app.use(proxyPath, proxy(url))
//app.engine('html', ejs.renderFile)
//app.set('view engine', 'html')
//app.set('views', __dirname)
//app.get('/env_broser.js', function)
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`forwarding ${proxyPath}/* to ${url}/*`)
})
