<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALTOc8Xejm7fGqvlxju2JVLc2YAcHHArE",
    authDomain: "crowdsourcedtranslation-696a0.firebaseapp.com",
    databaseURL: "https://crowdsourcedtranslation-696a0.firebaseio.com",
    projectId: "crowdsourcedtranslation-696a0",
    storageBucket: "crowdsourcedtranslation-696a0.appspot.com",
    messagingSenderId: "445544329993"
  };
  firebase.initializeApp(config);

var firebaseRef = new Firebase('https://crowdsourcedtranslation-696a0.firebaseio.com');
var sourceLanguage = $('post-sourclang').text();
var targetLanguage = $('post-targlang').text();
var transtext = $('post-text').text();
var transtags = $('post-tags').text();
// Save data to firebase
function savedata(){
  var sourceLanguage = $('post-sourclang').text();
  var targetLanguage = $('post-targlang').text();
  var transtext = $('post-text').text();
  var transtags = $('post-tags').text();

  firebaseRef.set({Source: sourceLanguage, Target: targetLanguage, Ttext:transtext, Tags:transtags});
  evt.preventDefault();
}
var postRef = firebaseRef.push();
submit.onclick = postRef
</script>
