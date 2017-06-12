'use strict';

describe('Controller: ResCtrl', function () {

  // load the controller's module
  beforeEach(module('clientsApp'));

  var ResCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResCtrl = $controller('ResCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
