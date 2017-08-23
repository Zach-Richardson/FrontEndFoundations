(function() {
  'use strict';

  angular
    .module('app')
    .controller('SkillsCtrl', SkillsCtrl);

  SkillsCtrl.$inject = ['$scope', 'ResumeService'];

  function SkillsCtrl($scope, ResumeService) {

    $scope.skills = ResumeService.getSkills();

    activate();

    //////////////////////

    function activate() {
      $scope.skills.isEditing = false;
      $scope.skills.add = addSkill;
      $scope.skills.edit = editSkills;
      $scope.skills.remove = removeSkill;
      $scope.skills.save = saveSkills;
    } 

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
      ResumeService.setSkills($scope.skills);
      $scope.skills.isEditing = false; 
    }
  }
})();