let playButton = document.getElementById("watchNowBtn");
let closebtn = document.getElementById("closebtn");
let videoPlayer = document.getElementById("videoPlayer");
let popupVideo = document.querySelector('.popupVideo'); 


playButton.addEventListener('click', () => {
    popupVideo.style.visibility= 'visible';
})
closebtn.addEventListener('click', () => {
    videoPlayer.pause();
    // Hide the popup
    popupVideo.style.visibility= 'collapse';
})