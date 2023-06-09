import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const currentTimeVideo = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? [];


player.on('timeupdate', throttle( e => {
     localStorage.setItem("videoplayer-current-time", JSON.stringify(e))
}, 1000));


player.setCurrentTime(currentTimeVideo.seconds);

