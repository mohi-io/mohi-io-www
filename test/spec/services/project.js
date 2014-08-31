'use strict';

describe('Service: Project', function () {

  // load the service's module
  beforeEach(module('mohiApp'));

  // instantiate service
  var _httpBackend;
  var _restmod;
  var Project;

  beforeEach(inject(function (_Project_, restmod, $httpBackend) {
    Project = _Project_;
    _httpBackend = $httpBackend;
    _restmod = restmod;
  }));

  it('should inject not empty dependencies', function () {
    expect(!!Project).toBe(true);
    expect(!!_httpBackend).toBe(true);
    expect(!!_restmod).toBe(true);
  });

  it("should call for projects", function() {
    _httpBackend.when('GET', '/projects').respond([ {repo: {name: 'sds'}}]);
    var projects = Project.$search({});
    expect(projects.length).toEqual(0);
    _httpBackend.flush();
    expect(projects.length).toEqual(1);
  });

});
