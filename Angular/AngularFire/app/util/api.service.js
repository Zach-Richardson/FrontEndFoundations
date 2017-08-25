(function() {
  'use strict';

  angular
  .module('app')
  .factory('APIService', APIService);

  APIService.$inject = ['$firebaseArray', '$firebaseObject'];

  function APIService($firebaseArray, $firebaseObject) {
    let ref = firebase.database().ref();
    let service = {
      getEducation: getEducation,
      getExperience: getExperience,
      getSkills: getSkills,
      getSummary: getSummary,
      getUser: getUser
    };

    return service;

    /////////////////////////////

    function getEducation(uid) {
      return $firebaseArray(ref.child(uid).child('education'));
    }

    function getExperience(uid) {
      return $firebaseArray(ref.child(uid).child('experience'));
    }

    function getSkills(uid) {
      return $firebaseArray(ref.child(uid).child('skills'));
    }

    function getSummary(uid) {
      return $firebaseObject(ref.child(uid).child('summary'));
    }

    function getUser(uid) {
      return $firebaseObject(ref.child(uid));
    }
  }
})();