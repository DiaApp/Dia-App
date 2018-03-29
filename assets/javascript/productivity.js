//firebase intitialization for productivity page
var config = {
    apiKey: "AIzaSyBPmro-Lmwer67ByMa3D-64qu7U-CsbT5I",
    authDomain: "diaapp-199504.firebaseapp.com",
    databaseURL: "https://diaapp-199504.firebaseio.com",
    projectId: "diaapp-199504",
    storageBucket: "diaapp-199504.appspot.com",
    messagingSenderId: "827656289467"
  };
  firebase.initializeApp(config);
  var database = firebase.database();