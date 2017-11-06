(function() {
  'use strict';

  angular
  .module('app')
  .controller('SummaryCtrl', SummaryCtrl);

  SummaryCtrl.$inject = ['$scope', '$stateParams'];

  function SummaryCtrl($scope, $stateParams) {

    activate();

    /////////////////////

    function activate() {
    }
  }
})();