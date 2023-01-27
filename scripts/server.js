const express = require('express')
const opcua = require("node-opcua")
const path = require('path')
const proxy = require('express-http-proxy')
const open = require('open')
const fs = require('fs')
//const bodyParser = require('body-parser')
const {url, token, bucket, org, opcua_url, opcua_username, opcua_password, opcua_prefix} = require('../env')
const monitor = require('./monitor')
const { fstat, fstatSync } = require('fs')

const port = 3001
const proxyPath = '/influx'

const app = express()
app.use(express.json());
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


// Create a new OPC-UA client
const client = opcua.OPCUAClient.create({
  keepSessionAlive: true,
  endpointMustExist: false
});
// Connect to the OPC-UA server
const opcua_userIdentity = {
  userName: opcua_username,
  password: opcua_password
};
var session = null;
restartConnection = async () => {
  try {
    await client.disconnect()
    await client.connect(opcua_url);
    console.log("Connected to OPC-UA server");
    session = await client.createSession(opcua_userIdentity);
    // Define a route to write a value to a node
  } catch (error) {
    console.log("OpcUa: restartConnection", error)
  }
}
restartConnection();

app.post('/api/node/:nodeId', async (req, res) => {
  try {
    const nodeId = opcua_prefix + req.params.nodeId;
    const value = req.body.value;
    const dataType = (await session.readVariableValue(nodeId)).value.dataType;
    var nodesToWrite = [{
        nodeId: nodeId,
        attributeId: opcua.AttributeIds.Value,
        value: { /* dataValue*/
          value: { /* Variant */
            dataType: dataType,
            value: value
          }
        }
      }
    ];
    const result = await session.write(nodesToWrite);
    console.log("Wrote node " + nodeId + " with value " + value + ", result: " + result);
    res.send({ message: "Value written successfully", result: result });
  } catch (err) {
    console.log("Error processing OPC UA write request: " + err);
    res.status(500).send({ error: err.message });
  }
});




app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
  console.log(`forwarding ${proxyPath}/* to ${url}/*`)
})
