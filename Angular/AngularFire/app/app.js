(function() {
  'use strict';

  /*-- Paste Your Firebase Web Config Code Here --*/
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);

  angular.module('app', ['ui.router', 'firebase']);
  
})();