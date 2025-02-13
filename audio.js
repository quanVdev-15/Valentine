const audio = document.getElementById('audioPlayer');
const gramophoneImg = document.getElementById('gramophoneImg');
const currentLyric = document.getElementById('current-lyric');
const playlistItems = document.querySelectorAll('#playlist li');

// Toggle play/pause with gramophone spin
function playAudio() {
  audio.play();
  gramophoneImg.classList.add('spinning');
}
function pauseAudio() {
  audio.pause();
  gramophoneImg.classList.remove('spinning');
}

// When a playlist item is clicked, load that song
playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    // Stop current playback
    pauseAudio();
    // Load new audio and lyrics from data attributes
    const newAudioSrc = item.getAttribute('data-audio');
    const newLyric = item.getAttribute('data-lyrics');
    audio.src = newAudioSrc;
    currentLyric.textContent = newLyric;
    // Optionally, update any other UI elements like song title/artist here
    playAudio();
  });
});

// Example: toggle play/pause on gramophone click
gramophoneImg.addEventListener('click', () => {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// Optionally, you can add timeupdate event to sync lyrics if using an LRC file...
