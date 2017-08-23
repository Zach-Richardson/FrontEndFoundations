(function() {
  'use strict';

  angular
    .module('app')
    .directive('skills', skills);

  skills.$inject = [];

  function skills() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/resume/directives/skills/skills.tpl.html',
      controller: 'SkillsCtrl'
    };
  }
})();