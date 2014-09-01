'use strict';

describe('Service: api', function () {

  beforeEach(ModuleBuilder.forModule('mohiApp')
    .serviceWithMocksFor('api', 'Project')
    .build());

  describe('test method', function() {

    it('11111 test',
      inject(function(api, ProjectMock) {

        var resp = [ {repo: {name: 'sds'}}];

        ProjectMock.$search.andReturn(resp);

        expect(api.projectDependencies('id')).toBe(resp);
      }));
  });
});
