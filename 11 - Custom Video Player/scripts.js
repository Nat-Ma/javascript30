// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');

// functions
function playVideo() {
  video.paused ? video.play() : video.pause();
}

function toggleIcon() {
  video.paused ? toggle.innerHTML = '►' : toggle.innerHTML = '▐▐'
}

function skipTime() {
  video.currentTime += Number(this.dataset.skip);
};

function updateRange() {
  video[this.name] = this.value;
}

function handleProgress() {

}

// hook up elements to functions
video.addEventListener('click', playVideo);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);

toggle.addEventListener('click', playVideo);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) playVideo();
});

skipButton.forEach(b => b.addEventListener('click', skipTime));
ranges.forEach(r => r.addEventListener('change', updateRange));
progressBar.addEventListener('change', handleProgress);
