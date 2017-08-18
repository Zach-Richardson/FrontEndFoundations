(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResumeCtrl', ResumeCtrl);

  ResumeCtrl.$inject = ['$scope', 'ResumeService'];

  function ResumeCtrl($scope, ResumeService) {

    $scope.education = ResumeService.getEducation();
    $scope.experience = ResumeService.getExperience();
    $scope.skills = ResumeService.getSkills();
    $scope.summary = ResumeService.getSummary();

    activate();

    function activate() {
      
      /*-- skills --*/
      $scope.skills.isEditing = false;
      $scope.skills.add = addSkill;
      $scope.skills.edit = editSkills;
      $scope.skills.remove = removeSkill;
      $scope.skills.save = saveSkills;

      /*-- summary --*/
      $scope.summary.isEditing = false;
      $scope.summary.edit = editSummary;
      $scope.summary.save = saveSummary;
    }

    /*-- skills --*/
    function addSkill() {
      $scope.skills.push({id: $scope.skills.length+1, skill: ""});
    }

    function editSkills() {
      $scope.skills.isEditing = true;
    }

    function removeSkill(skill) {
      $scope.skills.forEach((s, index) => {
        if(s.id === skill.id) {
          $scope.skills.splice(index, 1);
        }
      });

    }

    function saveSkills() {
      console.log($scope.skills);
      ResumeService.setSkills($scope.skills);
      $scope.skills.isEditing = false; 
    }

    /*-- summary --*/
    function editSummary() {
      $scope.summary.isEditing = true;
    }

    function saveSummary() {
      ResumeService.setSummary($scope.summary);
      $scope.summary.isEditing = false; 
    }
  }
})();