'use strict';

describe('Service: dependenciesModel', function () {

  // load the service's module
  beforeEach(module('mohiApp'));

  // instantiate service
  var httpBackend;
  var dependenciesModel;
  var validDependenciesCollectionResponse;

  beforeEach(inject(function (_dependenciesModel_, $httpBackend, _validDependenciesCollectionResponse_) {
    dependenciesModel = _dependenciesModel_;
    httpBackend = $httpBackend;
    validDependenciesCollectionResponse = _validDependenciesCollectionResponse_;
  }));

  it("should search projects", function () {
    //given
    httpBackend.when('GET', 'http://localhost:1337/dependencies').respond(validDependenciesCollectionResponse);
    httpBackend.when('GET', 'http://mohi.io/dependencies').respond(validDependenciesCollectionResponse);

    //when
    var dependencies = dependenciesModel.get();
    httpBackend.flush();

    //then
    expect(dependencies.dependencies.length).toEqual(15);
    expect(dependencies.count).toEqual(15);
  });

});
