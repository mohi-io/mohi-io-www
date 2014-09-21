'use strict';

describe('Service: projectDependenciesModel', function () {

  // load the service's module
  beforeEach(module('mohiApp'));

  // instantiate service
  var httpBackend;
  var projectDependenciesModel;
  var validProjectDependenciesCollectionResponse;

  beforeEach(inject(function (_projectDependenciesModel_, $httpBackend, _validProjectDependenciesCollectionResponse_) {
    projectDependenciesModel = _projectDependenciesModel_;
    httpBackend = $httpBackend;
    validProjectDependenciesCollectionResponse = _validProjectDependenciesCollectionResponse_;
  }));

  it("should call for given project dependencies", function() {
    //given
    httpBackend.when('GET', 'http://mohi.io/projects/3345df-343rfsv-322fdd/dependencies').respond(validProjectDependenciesCollectionResponse);
    httpBackend.when('GET', 'http://localhost:1337/projects/3345df-343rfsv-322fdd/dependencies').respond(validProjectDependenciesCollectionResponse);

    //when
    var projectDependencies = projectDependenciesModel.get({id: "3345df-343rfsv-322fdd"});
    httpBackend.flush();

    //then
    expect(projectDependencies.count).toEqual(2);
    expect(projectDependencies.branch).toEqual("master");
    expect(projectDependencies.dependencies.length).toEqual(2);
  });

});
