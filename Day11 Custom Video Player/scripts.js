// Get our methods
const player=document.querySelector('.player');
const video=document.querySelector('.viewer');
const progress=document.querySelector('.progress');
const progressBar=document.querySelector('.progress_filled');
const toggle=document.querySelector('.toggle');
const ranges=document.querySelector('.player__slider');
const skipButtons=document.querySelectorAll('[data-skip]');

// Build our functions

function toogle(){
    const method=video.paused ? 'play':'pause';
    video[method]();
}

function updateButton(){
    toggle.textContent= this.paused ? '►':'❚ ❚';
}

function skip(){
    video.currentTime+=parseFloat(this.dataset.skip);
}

skipButtons.forEach(button => button.addEventListener('click',skip));

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

video.addEventListener('click',toogle);
toggle.addEventListener('click',toogle);