let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_01.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_02.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_03.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_04.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_05.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_07.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_08.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_09.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_10.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_11.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_14.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_15.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_16.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_17.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_18.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_19.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_20.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_21.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_22.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_23.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_24.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_25.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_26.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_27.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_28.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_29_01.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_30_01.jpg?raw=true",
"https://github.com/ha01mu/OlympicSlidShow/blob/main/summer_31_01.jpg?raw=true"
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
