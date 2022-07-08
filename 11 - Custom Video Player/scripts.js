// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');

// functions
function playVideo() {
  video.paused ? video.play() : video.pause();
}

function toggleIcon() {
  video.paused ? toggle.innerHTML = '▐▐' : toggle.innerHTML = '►'
}

// hook up elements to functions
video.addEventListener('click', playVideo);
toggle.addEventListener('click', playVideo);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
