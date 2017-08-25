(function() {
  'use strict';

  angular
  .module('app')
  .directive('navigation', navigation);

  navigation.$inject = [];

  function navigation() {
    return {
      replace: true,
      restrict: 'EA',
      templateUrl: 'app/util/directives/navigation/navigation.tpl.html',
      controller: 'NavigationCtrl'
    };
  }
})();