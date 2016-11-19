var selenium = require('selenium-standalone');
var seleniumServer;

exports.config = {
  specs: [
    './specs/all.spec.js'
  ],
  capabilities: [{
    browserName: 'chrome',
    maxInstances: 1
  }],
  coloredLogs: true,
  baseUrl: 'http://localhost:9001',
  waitforTimeout: 5000,
  framework: 'jasmine',
  reporters: ['dot'],
  onPrepare: function() {
    return new Promise((resolve, reject) => {
      selenium.start((err, process) => {
        if(err) {
          return reject(err);
        }
        seleniumServer = process;
        resolve(process);
      })
    });
  },
  onComplete: function() {
    seleniumServer.kill();
  }
};