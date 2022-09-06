/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'http://localhost:8086'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || 'vAgixsCL7Ba5mcXa_kOuLMDTinebx_JAhwVof2UnnoQ4XrdXYt32kUEtsEOkE07Tk1_SPFFhLlytxir59Ai7Cg=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'TestingOrgaisation'
/**InfluxDB bucket used in examples  */
const bucket = 'TestingBucket'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'cc8916s'
/**InfluxDB password  */
const password = 'Wqf6223ccy'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
}
