let currentAudio = null;
let currentTrackIndex = 0;
let playButtons = document.getElementsByClassName('play-button');

function playSong(audioId, albumTitle, artistName, trackImageSrc, trackTitle) {
    let audioElement = document.getElementById(audioId);
    let musicMenu = document.getElementById('music-menu');
    let musicImage = document.getElementById('music-image');
    let musicTitle = document.getElementById('music-title');
    let musicArtist = document.getElementById('music-artist');

    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (audioElement.paused) {
        audioElement.play();
        currentAudio = audioElement;
        musicMenu.classList.add('show');

        // Update the track information in the music menu
        musicImage.src = trackImageSrc;
        musicTitle.textContent = trackTitle;
        musicArtist.textContent = artistName;
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        currentAudio = null;
        musicMenu.classList.remove('show');
        musicImage.src = '';
        musicTitle.textContent = '';
        musicArtist.textContent = '';
    }



}

function playTrack(trackIndex) {
    let playButton = playButtons[trackIndex];
    let audioId = playButton.getAttribute('id').replace('play-button-', '');
    playSong(audioId);
    currentTrackIndex = trackIndex;
}


// Отримуємо посилання на елементи управління
let playPauseButton = document.getElementById('play-pause-button');


// Забороняємо зупинку пісень при кліку на іконці пісні у контейнері
let trackIcons = document.getElementsByClassName('track-icon');
for (let i = 0; i < trackIcons.length; i++) {
    trackIcons[i].addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

// Додаємо обробники подій до кнопок
playPauseButton.addEventListener('click', function() {
    if (currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            playPauseButton.innerHTML = '&#10074;&#10074;'; // Пауза (||)
        } else {
            currentAudio.pause();
            playPauseButton.innerHTML = '&#9658;'; // Відтворення (▶)
        }
    }
});




// Get a reference to the volume control element
let volumeControl = document.getElementById('volume-control');

// Event listener to update the volume when the slider value changes
volumeControl.addEventListener('input', function() {


    if (currentAudio) {


// Set the volume of the current audio element
        currentAudio.

            volume = volumeControl.value;
    }
});



// Function to set the initial volume when a new track is played
function setInitialVolume() {
    if (currentAudio) {
        currentAudio.volume = volumeControl.value;
    }
}
setInitialVolume();


