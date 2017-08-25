(function() {
  'use strict';

  var config = {
    apiKey: "AIzaSyCajGS3xOGT2Xa-Plm5te12vhn95NseRvc",
    authDomain: "angular-c0bc3.firebaseapp.com",
    databaseURL: "https://angular-c0bc3.firebaseio.com",
    projectId: "angular-c0bc3",
    storageBucket: "angular-c0bc3.appspot.com",
    messagingSenderId: "748571119219"
  };
  firebase.initializeApp(config);

  angular.module('app', ['ui.router', 'firebase']);
  
})();