let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'KkTLymP4Lrs',
    });
}

let p = document.querySelector('#player_wrap');
p.classList.add('hidden');

function play() {
    let preview = document.querySelector('#video_preview');
    p = document.querySelector('#player_wrap');

    preview.classList.add('hidden');
    p.classList.remove('hidden');

    player.playVideo();
}

