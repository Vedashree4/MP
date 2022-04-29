const firebase=require('./firebase')
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  // updateStarCount(postElement, data);
});