(function() {
  'use strict';

  angular
  .module('app')
  .controller('NavigationCtrl', NavigationCtrl);

  NavigationCtrl.$inject = ['$scope', '$state', '$firebaseAuth', 'AuthService'];

  function NavigationCtrl($scope, $state, $firebaseAuth, AuthService) {
    $scope.logout = logout;

    activate();

    function activate() {
      $firebaseAuth().$onAuthStateChanged(data =>  {
        $scope.isAuthenticated = AuthService.isLoggedIn;
      });
    }

    function logout() {
      AuthService.logout();
      $state.go('login');
    }
  }
})();