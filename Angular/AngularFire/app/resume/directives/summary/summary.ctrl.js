(function() {
  'use strict';

  angular
    .module('app')
    .controller('SummaryCtrl', SummaryCtrl);

  SummaryCtrl.$inject = ['$scope', '$stateParams', 'APIService'];

  function SummaryCtrl($scope, $stateParams, APIService) {

    $scope.isEditingSummary = false;
    $scope.editSummary = editSummary;
    $scope.saveSummary = saveSummary;

    $scope.summary = APIService.getSummary($stateParams.uid);

    activate();

    /////////////////////

    function activate() {
      $scope.summary.$bindTo($scope, 'summary');
    }

    function editSummary() {
      $scope.isEditingSummary = true;
    }

    function saveSummary() {
      $scope.isEditingSummary = false; 
    }
  }
})();