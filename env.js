/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'http://localhost:8086'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || 'vAgixsCL7Ba5mcXa_kOuLMDTinebx_JAhwVof2UnnoQ4XrdXYt32kUEtsEOkE07Tk1_SPFFhLlytxir59Ai7Cg=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'TestingOrgaisation'
/**InfluxDB bucket used in examples  */
const bucket = process.env['INFLUX_BUCKET'] || 'manual_process_data'
// ONLY onboarding example
/**InfluxDB user  */
const username = process.env['INFLUX_USERNAME'] || '--'
/**InfluxDB password  */
const password = process.env['INFLUX_PASSWORD'] || '--'

/** OPCUA */

const opcua_url = process.env['OPCUA_URL'] || 'opc.tcp://127.0.0.1:49320'

const opcua_username = process.env['OPCUA_USERNAME'] || 'opcua'

const opcua_password = process.env['OPCUA_USERNAME'] || 'changemechangeme'

const opcua_prefix = "ns=2;s=ManualProcessData.CELLFAB-PT."


module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
  opcua_url,
  opcua_username,
  opcua_password,
  opcua_prefix
}
