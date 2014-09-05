'use strict';

describe('Service: projectModel', function () {

  // load the service's module
  beforeEach(module('mohiApp', 'mockedProject'));

  // instantiate service
  var httpBackend;
  var projectModel;
  var validProjectResponse;
  var validProjectCollectionResponse;

  beforeEach(inject(function (_projectModel_, $httpBackend, _validProjectResponse_, _validProjectCollectionResponse_) {
    projectModel = _projectModel_;
    httpBackend = $httpBackend;
    validProjectResponse = _validProjectResponse_;
    validProjectCollectionResponse = _validProjectCollectionResponse_;
  }));

  it("should call for given project", function () {
    //given
    httpBackend.when('GET', 'http://mohi.io/projects/3345df-343rfsv-322fdd').respond(validProjectResponse);

    //when
    var project = projectModel.get({id: "3345df-343rfsv-322fdd"});
    httpBackend.flush();

    //then
    expect(project.id).toEqual("3345df-343rfsv-322fdd");
    expect(project.name).toEqual("oauth-uaa");
    expect(project.description).toEqual("description");
    expect(project.owner).toEqual({
      id: "12345kd-3232",
      name: "zenedith",
      resource: "users"
    });
    expect(project.repository).toEqual({
      type: "git",
      provider: "github",
      branches: ["master", "develop"],
      defaultBranch: "master"
    });
    expect(project.build).toEqual({
      type: "maven",
      language: "java1.7",
      version: "3"
    });
    expect(project.status).toEqual({
      type: "unknown",
      badges: {
        svg: "http://img.shields.io/gemnasium/mathiasbynens/he.svg",
        png: "http://img.shields.io/gemnasium/mathiasbynens/he.png",
        png2x: "http://img.shields.io/gemnasium/mathiasbynens/he.png"
      }
    });
    expect(project.version).toEqual("1.8.1");
    expect(project.updatedAt).toEqual("1997-07-16T19:20:30+01:00");
    expect(project.createdAt).toEqual("1997-07-16T19:20:30+01:00");
  });

  it("should search projects", function () {
    //given
    httpBackend.when('GET', 'http://mohi.io/projects').respond(validProjectCollectionResponse);

    //when
    var projects = projectModel.get();
    httpBackend.flush();

    //then
    expect(projects.projects.length).toEqual(1);
    expect(projects.count).toEqual(1);
  });

});