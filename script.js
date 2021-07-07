const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', jump);

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    dino.classList.remove('jump');
  }, 500);
}

let active = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  console.log(parseInt(window.getComputedStyle(dino).getPropertyValue('top')));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('Game over!');
    return;
  }
}, 10);
