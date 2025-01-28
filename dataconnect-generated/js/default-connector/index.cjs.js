const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'Building-Management-Client-Side',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

