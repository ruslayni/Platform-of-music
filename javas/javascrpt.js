*
var currentAudio = null;

function playSong(audioId) {
    var audioElement = document.getElementById(audioId);
    var playButton = document.getElementById('play-button-' + audioId);
    var footerText = document.getElementById('footer-text');

    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        var prevButton = document.getElementById('play-button-' + currentAudio.id);
        prevButton.textContent = currentAudio.getAttribute('data-track-name');
    }

    if (audioElement.paused) {
        audioElement.play();
        playButton.textContent = 'Pause';
        currentAudio = audioElement;
        footerText.innerHTML = '<span class="track-number">' + audioElement.getAttribute('data-track-number') + '</span>' + audioElement.getAttribute('data-track-name');
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        playButton.textContent = audioElement.getAttribute('data-track-name');
        currentAudio = null;
        footerText.textContent = '';
    }
}