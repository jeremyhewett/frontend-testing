'use strict';

let App = require('./app.pageObject');

describe('aclui test App', function() {

  beforeAll(() => {
    App.load();
  });

  it('should have the right title', function() {
    expect(App.heading).toEqual('Welcome to React');
  });

});