/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  //url: 'http://localhost:8086', //'/influx',
  url: '/influx',
  /** InfluxDB authorization token */
  token: '%TOKEN%',
  /** InfluxDB organization */
  org: '%ORG%',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: '%BUCKET%',
}
