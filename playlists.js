// JavaScript код

function togglePlaylist(playlistId) {
  var playlist = document.querySelectorAll(".playlist")[playlistId - 1];
  var trackList = playlist.querySelector(".track-list");
  trackList.classList.toggle("show");
}

function toggleAudio(button) {
  var listItem = button.parentNode;
  var audio = listItem.querySelector("audio");
  var isActive = listItem.classList.contains("active");

  if (isActive) {
      audio.pause();
      listItem.classList.remove("active");
  } else {
      audio.play();
      listItem.classList.add("active");
  }
}
