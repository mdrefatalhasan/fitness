const images = [
  'images/slide/1.png',
  'images/slide/2.png',
  'images/slide/3.png',
  'images/slide/4.png',
  'images/slide/5.png',
  'images/slide/6.png',
  'images/slide/7.png',
  'images/slide/8.png',
  'images/slide/9.png',
  'images/slide/10.png',
  'images/slide/11.png',
  'images/slide/12.png',
  'images/slide/13.png',
  'images/slide/14.png',
  'images/slide/15.png',
  'images/slide/16.png',
];

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

let current = 0;
const bgLayer = document.getElementById('bg-layer');

bgLayer.style.backgroundImage = `url(${images[current]})`;
current++;

function changeBackground() {
  bgLayer.style.opacity = '0';

  setTimeout(() => {
    bgLayer.style.backgroundImage = `url(${images[current]})`;
    bgLayer.style.opacity = '1';
    current = (current + 1) % images.length;
  }, 1000);
}

setInterval(changeBackground, 3000);
