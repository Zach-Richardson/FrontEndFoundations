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
          url: '/resume/{id}',
          templateUrl: 'app/resume/resume.tpl.html',
          controller: 'ResumeCtrl'
        })
        .state('setup', {
          url: '/setup/{id}',
          templateUrl: 'app/setup/setup.tpl.html',
          controller: 'SetupCtrl'
        })
          .state('setup.summary', {
            url: '/summary',
            templateUrl: 'app/setup/steps/summary/summary.tpl.html',
            controller: 'SummaryCtrl'
          })
          .state('setup.skills', {
            url: '/skills',
            templateUrl: 'app/setup/steps/skills/skills.tpl.html',
            controller: 'SkillsCtrl'
          })
          .state('setup.experience', {
            url: '/experience',
            templateUrl: 'app/setup/steps/experience/experience.tpl.html',
            controller: 'ExperienceCtrl'
          })
          .state('setup.education', {
            url: '/education',
            templateUrl: 'app/setup/steps/education/education.tpl.html',
            controller: 'EducationCtrl'
          });
  } 
})();
