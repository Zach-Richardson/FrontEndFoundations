(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', '$state', 'AuthService'];

  function RegisterCtrl($scope, $state, AuthService) {

    $scope.register = register;

    function register() {
      AuthService.register($scope.email, $scope.password).then(data => {
        AuthService.login($scope.email, $scope.password).then(data => {
          $state.go('resume', {id: data.uid});
        })
      }).catch(error => console.log(error));
    }
  }
  
})();