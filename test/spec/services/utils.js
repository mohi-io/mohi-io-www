'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('mohiApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  it('should sprintf', function () {
    expect(utils.sprintf('a=%s&n=%s', 'b', 'c')).toEqual("a=b&n=c");
  });

});
