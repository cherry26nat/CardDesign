const videoBg = document.querySelector("#video-absolute");
const btnPlayPaused = document.querySelector("#btn-play-pause");

btnPlayPaused.addEventListener("click", playPause);

function playPause() {
    if (videoBg.paused){
    videoBg.play();
} else{
    videoBg.pause();
}
}