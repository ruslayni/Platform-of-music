var playButtons = document.querySelectorAll(".play-button");
var audioPlayer = document.querySelectorAll(".audio-player");
var musicMenu = document.getElementById("music-menu");
var musicImage = document.getElementById("music-image");
var musicTitle = document.getElementById("music-title");
var musicArtist = document.getElementById("music-artist");
var currentTrackIndex = 0;

function playTrack(trackIndex) {
  var trackItem = document.getElementsByClassName("track")[trackIndex];
  var trackInfo = trackItem.querySelector(".track-details");
  var trackImage = trackItem.querySelector("img");
  var trackTitle = trackItem.querySelector("h3");
  var trackArtist = trackItem.querySelector("p");

  audioPlayer[currentTrackIndex].pause();
  currentTrackIndex = trackIndex;
  audioPlayer[currentTrackIndex].src = trackItem.querySelector("audio").src;
  audioPlayer[currentTrackIndex].play();

  musicImage.src = trackImage.src;
  musicTitle.textContent = trackTitle.textContent;
  musicArtist.textContent = trackArtist.textContent;
  musicMenu.classList.add("show");
}

function pauseTrack() {
  audioPlayer[currentTrackIndex].pause();
}

function togglePlayback() {
  if (audioPlayer[currentTrackIndex].paused) {
    playTrack(currentTrackIndex);
  } else {
    pauseTrack();
  }
}

function nextTrack() {
  var nextTrackIndex = (currentTrackIndex + 1) % playButtons.length;
  playTrack(nextTrackIndex);
}

function previousTrack() {
  var previousTrackIndex = (currentTrackIndex - 1 + playButtons.length) % playButtons.length;
  playTrack(previousTrackIndex);
}

for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    var index = Array.from(playButtons).indexOf(this);
    playTrack(index);
  });
}