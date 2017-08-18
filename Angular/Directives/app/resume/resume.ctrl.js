(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResumeCtrl', ResumeCtrl);

  ResumeCtrl.$inject = ['$scope', 'ResumeService'];

  function ResumeCtrl($scope, ResumeService) {

    $scope.education = ResumeService.getEducation();
    $scope.experience = ResumeService.getExperience();
    $scope.summary = ResumeService.getSummary();

    activate();

    function activate() {
      $scope.summary.isEditing = false;
      $scope.summary.edit = editSummary;
      $scope.summary.save = saveSummary;
    }
    function editSummary() {
      $scope.summary.isEditing = true;
    }

    function saveSummary() {
      ResumeService.setSummary($scope.summary);
      $scope.summary.isEditing = false; 
    }
  }
})();