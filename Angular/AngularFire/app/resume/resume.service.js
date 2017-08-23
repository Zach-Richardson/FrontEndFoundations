(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResumeService', ResumeService);

  ResumeService.$inject = [];

  function ResumeService() {
    var resumeData = initResumeData();

    var service = {
      getEducation,
      setEducation,
      getExperience,
      setExperience,
      getSkills,
      setSkills,
      getSummary,
      setSummary
    };

    return service;

    /////////////////////////

    function initResumeData() {
      return {
        summary: {
          background: 'http://i.huffpost.com/gen/2877070/images/n-SCRANTON-PA-628x314.jpg',
          profile: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
          name: 'Michael Gary Scott',
          title: 'Regional Manager',
          location: 'Scranton, PA',
          phone: '(570) 867-5309',
          email: 'mscott@dundermifflin.com'
        },
        skills: [
          {id: 1, skill: 'Public Speaking'}, 
          {id: 2, skill: 'Management'}, 
          {id: 3, skill: 'Selling'}, 
          {id: 4, skill: 'Mentorship'}, 
          {id: 5, skill: 'Personal Coaching'}, 
          {id: 6, skill: 'Song Writing'}, 
          {id: 7, skill: 'Joke Telling'}, 
          {id: 8, skill: 'Story Telling'}, 
          {id: 9, skill: 'Inspiring Others'}
        ],
        experience: [
          {
            title: 'Regional Manager',
            organization: 'Dunder Mifflin',
            startYear: 2000,
            endYear: 2009,
            descriptions: [
              'Responsible for making the office a place where dreams come true.',
              'Threw the most amazing office parties to improve office morale.'
            ]
          },    
          {
            title: 'Salesman',
            organization: 'Dunder Mifflin',
            startYear: 1992,
            endYear: 2000,
            descriptions: [
              'Won consecutive "Best Salesman of the Year" awards.',
              'Singlehandedly acquired key clients using unorthodox methods.'
            ]
          }
        ],
        education: [  
          {
            title: 'High School Diploma',
            organization: 'Scranton High School',
            startYear: 1978,
            endYear: 1982,
            descriptions: [
              'Scored more goals than anyone in the history of the hockey team.',
              'Lost college tuition money in a pyramid scheme.'
            ]
          }
        ]
      };
    }

    function getEducation() {
      return resumeData.education;
    }

    function setEducation(education) {
      resumeData.education = education;
    }

    function getExperience() {
      return resumeData.experience;
    }

    function setExperience(experience) {
      resumeData.experience = experience;
    }

    function getSkills() {
      return resumeData.skills;
    }

    function setSkills(skills) {
      resumeData.skills = skills;
    }

    function getSummary() {
      return resumeData.summary;
    }

    function setSummary(summary) {
      resumeData.summary = summary;
    }
  }
})();