// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');

// functions
function playVideo() {
  video.paused ? video.play() : video.pause();
  console.dir(video);
}

function toggleIcon() {
  video.paused ? toggle.innerHTML = '►' : toggle.innerHTML = '▐▐'
}

function skipTime() {
  video.currentTime += Number(this.dataset.skip);
};

// hook up elements to functions
video.addEventListener('click', playVideo);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);

toggle.addEventListener('click', playVideo);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) playVideo();
});

skipButton.forEach(b => b.addEventListener('click', skipTime));
