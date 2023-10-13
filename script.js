const videos = document.querySelectorAll('.vid-cont video');
const popup = document.querySelector('.popup-vid');
const popupVideo = popup.querySelector('video');
const closeBtn = popup.querySelector('.close');
const nextBtn = popup.querySelector('.next');
const prevBtn = popup.querySelector('.prev');

let currentVideoIndex = 0;

videos.forEach((vid, index) => {
    vid.onclick = () => {
        currentVideoIndex = index;
        updatePopupVideo();
        popup.style.display = 'block';
    };
});

closeBtn.onclick = () => {
    popup.style.display = 'none';
    popupVideo.pause();
};

nextBtn.onclick = () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updatePopupVideo();
};

prevBtn.onclick = () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updatePopupVideo();
};

function updatePopupVideo() {
    const video = videos[currentVideoIndex];
    popupVideo.src = video.getAttribute('src');
    popupVideo.load();
    popupVideo.play();
}