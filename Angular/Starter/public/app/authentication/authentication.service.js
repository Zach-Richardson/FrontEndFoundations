(function() {
  'use strict';

  angular
    .module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$firebaseAuth'];

  function AuthService($firebaseAuth) {
    var authObj = $firebaseAuth();

    return {
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      register: register,
    };

    ///////////////////////

    function isLoggedIn() {
      return authObj.$getAuth();
    }

    function login(email, password) {
      return authObj.$signInWithEmailAndPassword(email, password);
    }

    function logout() {
      return authObj.$signOut();
    }

    function register(email, password) {
      return authObj.$createUserWithEmailAndPassword(email, password);
    }
  }
})();