<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-database.js"></script>
<script>
var config = {
  apiKey: "AIzaSyALTOc8Xejm7fGqvlxju2JVLc2YAcHHArE",
  authDomain: "crowdsourcedtranslation-696a0.firebaseapp.com",
databaseURL: "https://crowdsourcedtranslation-696a0.firebaseio.com",
storageBucket: "crowdsourcedtranslation-696a0.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var recommendations = firebase.database().ref("recommendations");

// Save a new recommendation to the database, using the input in the form
var submitRecommendation = function () {

// Get input values from each of the form elements
var title = $("#talkTitle").text();
var presenter = $("#talkPresenter").text();
var link = $("#talkLink").text();

// Push a new recommendation to the database using those values
recommendations.push({
  "title": title,
  "presenter": presenter,
  "link": link
});
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

// Find the HTML element with the id recommendationForm, and when the submit
// event is triggered on that element, call submitRecommendation.
$("#recommendationForm").submit(submitRecommendation);

});
</script>
