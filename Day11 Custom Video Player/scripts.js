// Get our methods
const player=document.querySelector('.player');
const video=document.querySelector('.viewer');
const progress=document.querySelector('.progress');
const progressBar=document.querySelector('.progress_filled');
const toggle=document.querySelector('.toggle');
const ranges=document.querySelector('.player__slider');
const skipButtons=document.querySelector('[data-skip]');

// Build our functions

function toogle(){
    console.log(video);
    const method=video.paused ? 'play':'pause';
    video[method]();
}

toggle.addEventListener('click',toogle);