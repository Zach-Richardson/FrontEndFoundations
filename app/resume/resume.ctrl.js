(function() {
  'use strict';

  angular
    .module('app')
    .controller('ResumeCtrl', ResumeCtrl);

  ResumeCtrl.$inject = ['$scope', '$stateParams', 'APIService'];

  function ResumeCtrl($scope, $stateParams, APIService) {

    $scope.education = APIService.getEducation($stateParams.uid);
    $scope.experience = APIService.getExperience($stateParams.uid);
    
  }
})();