(function() {
  'use strict';

  angular
    .module('app')
    .factory('AuthService', AuthService);

  AuthService.$inject = [];

  function AuthService() {
    return {
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout,
      register: register,
    };

    ///////////////////////

    function isLoggedIn() {
      return true;
    }

    function login(email, password) {
      console.log(email, password);
    }

    function logout() {
      console.log("Goodbye!");
    }

    function register(email, password) {
      console.log(email, password);
    }
  }
})();