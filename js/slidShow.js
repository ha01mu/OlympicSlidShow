let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"summer_01.jpg",
"summer_02.jpg",
"summer_03.jpg",
"summer_04.jpg",
"summer_05.jpg",
"summer_07.jpg",
"summer_08.jpg",
"summer_09.jpg",
"summer_10.jpg",
"summer_11.jpg",
"summer_14.jpg",
"summer_15.jpg",
"summer_16.jpg",
"summer_17.jpg",
"summer_18.jpg",
"summer_19.jpg",
"summer_20.jpg",
"summer_21.jpg",
"summer_22.jpg",
"summer_23.jpg",
"summer_24.jpg",
"summer_25.jpg",
"summer_26.jpg",
"summer_27.jpg",
"summer_28.jpg",
"summer_29_01.jpg",
"summer_30_01.jpg",
"summer_31_01.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
