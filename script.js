<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-database.js"></script>
<script>
var config = {
  apiKey: "AIzaSyALTOc8Xejm7fGqvlxju2JVLc2YAcHHArE",
  authDomain: "crowdsourcedtranslation-696a0.firebaseapp.com",
  databaseURL: "https://crowdsourcedtranslation-696a0.firebaseio.com",
  projectId: "crowdsourcedtranslation-696a0",
  storageBucket: "crowdsourcedtranslation-696a0.appspot.com",
  messagingSenderId: "445544329993"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var recommendations = myFirebase.child("recommendations");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
recommendations.push({
    "title": "The danger of a single story",
    "presenter": "Chimamanda Ngozi Adichie",
    "link": "https://www.ted.com"
});
});
</script>
