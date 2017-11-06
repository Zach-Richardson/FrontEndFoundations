(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResumeService', ResumeService);

  ResumeService.$inject = ['$firebaseObject', '$firebaseArray'];

  function ResumeService() {
    var summary, skills, experience, education;

    var service = {
      initResume,
      getEducation,
      getExperience,
      getSkills,
      getSummary
    };

    return service;

    /////////////////////////

    function initResume(uid) {
      var ref = firebase.database().ref().child(uid);
      summary = $firebaseObject(ref.child('summary'));
      skills = $firebaseArray(ref.child('skills'));
      experience = $firebaseArray(ref.child('experience'));
      education = $firebaseArray(ref.child('education'));
    }

    function getEducation() {
      return education;
    }

    function getExperience() {
      return experience
    } 

    function getSkills() {
      return skills;
    }

    function getSummary() {
      return summary;
    }
  }
})();