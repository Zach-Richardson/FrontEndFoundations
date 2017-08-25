(function() {
  'use strict';

  angular
    .module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', '$state', 'AuthService', 'APIService'];

  function RegisterCtrl($scope, $state, AuthService, APIService) {

    $scope.register = register;

    function register() {
      AuthService.register($scope.email, $scope.password).then(data => {
        AuthService.login($scope.email, $scope.password).then(data => {
          let userObj = APIService.getUser(data.uid);
          userObj.summary = { email: $scope.email };
          userObj.$save().then(ref => {
            console.log(data);
            $state.go('resume', {id: data.uid});
          });
        })
      }).catch(error => console.log(error));
    }
  }
  
})();