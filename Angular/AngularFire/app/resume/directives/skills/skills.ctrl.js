(function() {
  'use strict';

  angular
    .module('app')
    .controller('SkillsCtrl', SkillsCtrl);

  SkillsCtrl.$inject = ['$scope', '$stateParams', 'APIService'];

  function SkillsCtrl($scope, $stateParams, APIService) {

    $scope.isEditingSkills = false;
    $scope.addSkill = addSkill;
    $scope.editSkills = editSkills;
    $scope.removeSkill = removeSkill;
    $scope.saveSkills = saveSkills;

    $scope.skills = APIService.getSkills($stateParams.uid);

    //////////////////////

    function addSkill() {
      $scope.skills.$add({id: $scope.skills.length+1, skill: ""});
    }

    function editSkills() {
      $scope.isEditingSkills = true;
    }

    function removeSkill(skill) {
      $scope.skills.$remove(skill);

    }

    function saveSkills() {
      $scope.isEditingSkills = false; 
      $scope.skills.forEach(skill => { $scope.skills.$save(skill) });
    }
  }
})();