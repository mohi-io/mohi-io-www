'use strict';

describe('Service: api', function () {

  beforeEach(module('mohiApp', 'mockedProjectDependencies', 'mockedProject'));

  beforeEach(ModuleBuilder.forModule('mohiApp')
    .serviceWithMocksFor('api', 'dependenciesModel', 'projectModel')
    .build());

  describe('test api method', function () {

    it('should return project dependencies',
      inject(function (api, dependenciesModelMock, validProjectDependenciesCollectionResponse) {
        dependenciesModelMock.get.andReturn(validProjectDependenciesCollectionResponse);

        var response = api.getProjectDependencies('id');
        expect(response).toBe(validProjectDependenciesCollectionResponse);
      }));

    it('should return project data',
      inject(function (api, projectModelMock, validProjectResponse) {
        projectModelMock.get.andReturn(validProjectResponse);

        var response = api.getProject('id');
        expect(response).toBe(validProjectResponse);
      }));


    it('should return projects data',
      inject(function (api, projectModelMock, validProjectCollectionResponse) {
        projectModelMock.get.andReturn(validProjectCollectionResponse);

        var response = api.getProjects();
        expect(response).toBe(validProjectCollectionResponse);
      }));

    it('should return recent projects data',
      inject(function (api, projectModelMock, validProjectCollectionResponse) {
        projectModelMock.get.andReturn(validProjectCollectionResponse);

        var response = api.getRecentProjects();
        expect(response).toBe(validProjectCollectionResponse);
      }));
  });
});
