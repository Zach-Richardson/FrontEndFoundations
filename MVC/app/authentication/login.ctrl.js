(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'AuthService'];

  function LoginCtrl($scope, AuthService) {

    $scope.login = login;

    //////////////////////

    function login() {
      AuthService.login($scope.email, $scope.password);
    }
  }

})();