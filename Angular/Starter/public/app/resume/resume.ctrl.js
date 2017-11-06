(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResumeCtrl', ResumeCtrl);

  ResumeCtrl.$inject = ['$scope', '$stateParams', 'ResumeService'];

  function ResumeCtrl($scope, $stateParams, ResumeService) {

    $scope.editSummary = editSummary;
    $scope.saveSummary = saveSummary;
    $scope.showSummaryForm = false;

    activate();

    function activate() {
      ResumeService.initResume($stateParams.id);
      $scope.summary = ResumeService.getSummary();
      $scope.skills = ResumeService.getSkills();
      $scope.experience = ResumeService.getExperience();
      $scope.education = ResumeService.getEducation();
    }

    function editSummary() {
      $scope.showSummaryForm = true;
    }

    function saveSummary() {
      $scope.summary.$save()
      .then(function(data) {
        $scope.showSummaryForm = false;
      }); 
    }

    function addSkills() {
      $scope.skills.$add({id: generateId(), skill: ''});
    }

    function deleteSkill(skill) {
      $scope.skills.$remove(skill);
    }

    function saveSkills() {
      $scope.skills.forEach(function(skill) {
        skill.$save();
      });
      $scope.showSkillsForm = false;
    }
  }
})();