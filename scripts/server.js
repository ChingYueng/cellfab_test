const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')
const open = require('open')
const {url} = require('../env')
const monitor = require('./monitor')

const port = 3001
const proxyPath = '/influx'

const app = express()
// monitor express response time in InfluxDB
monitor(app)
// serve all files of the git repository
//app.use(express.static(path.join(__dirname, '..', '..'), {index: false}))

app.use(express.static(path.join(__dirname, '..'), {index: false}))
// create also proxy to InfluxDB
app.use(proxyPath, proxy(url))
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`forwarding ${proxyPath}/* to ${url}/*`)
  //console.log(`opening http://localhost:${port}/examples/index.html`)
  //open(`http://localhost:${port}/examples/index.html`)
  //console.log(`opening http://localhost:${port}/examples/viscosity_write.html`)
  //open(`http://localhost:${port}/examples/viscosity_write.html`)
  //console.log(`opening http://localhost:${port}/examples/viscosity_query.html`)
  //open(`http://localhost:${port}/examples/viscosity_query.html`)
  //console.log(`opening http://localhost:${port}/examples/draw_graph.html`)
  //open(`http://localhost:${port}/examples/draw_graph.html`)
  //console.log(`opening http://localhost:${port}/examples/MixingOutput.html`)
  //open(`http://localhost:${port}/examples/MixingOutput.html`)
  //console.log(`opening http://localhost:${port}/examples/Mixing.html`)
  //open(`http://localhost:${port}/examples/Mixing.html`)
  //console.log(`opening http://localhost:${port}/examples/Mixing_sendmatrix.html`)
  //open(`http://localhost:${port}/examples/Mixing_sendmatrix.html`)
})
