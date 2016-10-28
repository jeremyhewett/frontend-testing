var selenium = require('selenium-standalone');
var seleniumServer;

exports.config = {
  specs: [
    './specs/**'
  ],
  capabilities: [{
    browserName: 'chrome'
  }],
  coloredLogs: true,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 1000,
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