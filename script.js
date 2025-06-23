const images = [
  'images/slide/1.webp',
  'images/slide/3.webp',
  'images/slide/5.webp',
  'images/slide/7.webp',
  'images/slide/9.webp',
  'images/slide/11.webp',
  'images/slide/13.webp',
  'images/slide/15.webp',
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

setInterval(changeBackground, 2000);
