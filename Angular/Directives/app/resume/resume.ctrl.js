(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResumeCtrl', ResumeCtrl);

  ResumeCtrl.$inject = ['$scope', 'ResumeService'];

  function ResumeCtrl($scope, ResumeService) {

    $scope.education = ResumeService.getEducation();
    $scope.experience = ResumeService.getExperience();
    
  }
})();