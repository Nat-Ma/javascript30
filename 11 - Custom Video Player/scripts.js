// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');
const fullscreen = player.querySelector('.fullscreen');

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
  const percent = video.currentTime * 100 / video.duration;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateSlider(e) {
  const percent = e.offsetX * 100 / progress.clientWidth;
  progressBar.style.flexBasis = `${percent}%`;
  video.currentTime = percent * video.duration / 100;
}

function toggleFullscreen() {
  video.requestFullscreen();
}

// hook up elements to functions
video.addEventListener('click', playVideo);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', playVideo);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) playVideo();
});

skipButton.forEach(b => b.addEventListener('click', skipTime));
ranges.forEach(r => r.addEventListener('change', updateRange));

let mousedown = false;
progress.addEventListener('click', updateSlider);
progress.addEventListener('mousemove', (e) => mousedown && updateSlider(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
fullscreen.addEventListener('click', toggleFullscreen);
