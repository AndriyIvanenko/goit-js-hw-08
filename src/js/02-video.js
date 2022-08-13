// const Vimeo = require('@vimeo/player');
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

if (!localStorage['videoplayer-current-time']) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(localStorage['videoplayer-current-time']);
}

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    // console.log(localStorage['videoplayer-current-time']);
    // localStorage.clear();
  }, 1000)
);
