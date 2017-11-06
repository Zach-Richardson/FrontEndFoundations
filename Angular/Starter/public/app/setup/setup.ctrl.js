(function() {
  'use strict';

  angular
  .module('app')
  .controller('SetupCtrl', SetupCtrl);

  SetupCtrl.$inject = ['$rootScope', '$scope', '$state', '$stateParams', 'SetupService'];

  function SetupCtrl($rootScope, $scope, $state, $stateParams, SetupService) {
    $scope.steps = SetupService.getSteps();

    $scope.nextStep = nextStep;
    $scope.prevStep = prevStep;

    activate();

    /////////////////////

    function activate() {
      setCurrStep();
    }

    function setCurrStep() {
      $scope.currStep = getCurrStep();
    }

    function getCurrStep() {
      return $scope.steps.filter(function(step) { 
        return $state.$current.name === step.state 
      })[0];
    }

    function nextStep() {
      $state.go($scope.currStep.next)
      .then(function(state) {
        setCurrStep();
      }).catch(function(err) {
        console.log(err);
      });
    }

    function prevStep() {
      $state.go($scope.currStep.prev)
      .then(function(state) {
        setCurrStep();
      }).catch(function(err) {
        console.log(err);
      });
    }
  }
})();