(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'AuthService'];

  function RegisterCtrl($scope, AuthService) {

    $scope.register = register;

    function register() {
      AuthService.register($scope.email, $scope.password);
    }
  }
  
})();