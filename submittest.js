<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
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

function submitPost(e) {
  var myDataRef = new Firebase('https://crowdsourcedtranslation-696a0.firebaseio.com/');
  var name = $('#titleInput').val();
  var text = $('#postInput').val();
  myDataRef.push({name: name, text: text});
  $('#postInput').val('');
  e.preventDefault();
}

function displayUserPost(name, text) {
  $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#PostsDiv'));
  $('#PostsDiv')[0].scrollTop = $('#PostsDiv')[0].scrollHeight;
}
</script>
