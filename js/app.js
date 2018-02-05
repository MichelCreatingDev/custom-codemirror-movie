var movie = CodeMirror.movie('code');

// Create simple UI to interact with movie
var btnStart = document.getElementsByClassName('CodeMirror-start')[0];
btnStart.onclick = function() {
  movie.play();
  btnStart.style.visibility = 'hidden';
};

// Listen to events to change UI state
movie.on('stop', function(name) {
  btnStart.style.visibility = 'initial';
});
