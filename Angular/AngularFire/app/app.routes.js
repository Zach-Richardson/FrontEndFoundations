(function () {
  'use strict'

  angular
      .module('app')
      .config(config)

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/authentication/login.tpl.html',
          controller: 'LoginCtrl'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'app/authentication/register.tpl.html',
          controller: 'RegisterCtrl'
        })
        .state('resume', {
          url: '/resume/{uid}',
          templateUrl: 'app/resume/resume.tpl.html',
          controller: 'ResumeCtrl'
        });
  } 
})();
