const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const speed = document.querySelector('.player-speed');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //

function showPlayIcon() {
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
}

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    video.pause();
    showPlayIcon();
  }
}

// Update progress bar as video plays
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentTime.textContent = formatTime(video.currentTime);
  duration.textContent = formatTime(video.duration);
}

// function updateVideoProgress(event) {
//   const newTime = (event.offsetX / progressRange.offsetWidth) * video.duration;
//   video.currentTime = newTime;
// }

// Format current time, duration
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
// On video end, show play button icon
video.addEventListener('ended', showPlayIcon);

//
video.addEventListener('loadedmetadata', updateProgress);
video.addEventListener('timeupdate', updateProgress);
// progressRange.addEventListener('click', updateVideoProgress);
