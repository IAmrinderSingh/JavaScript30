// Get our methods
const player=document.querySelector('.player');
const video=document.querySelector('.viewer');
const progress=document.querySelector('.progress');
const progressBar=document.querySelector('.progress__filled');
const toggle=document.querySelector('.toggle');
const ranges=document.querySelectorAll('.player__slider');
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

function handleRangeUpdate(){
    video[this.name]=this.value;
}

function handleProgress(){
    const percent=(video.currentTime / video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

skipButtons.forEach(button => button.addEventListener('click',skip));

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

video.addEventListener('click',toogle);
toggle.addEventListener('click',toogle);