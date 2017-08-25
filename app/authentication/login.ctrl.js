(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$state', 'AuthService'];

  function LoginCtrl($scope, $state, AuthService) {

    $scope.login = login;

    //////////////////////

    function login() {
      AuthService.login($scope.email, $scope.password).then(data => {
        $state.go('resume', {id: data.uid});
      }).catch(error => console.log(error));

    }
  }

})();