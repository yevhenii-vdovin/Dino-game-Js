const otter = document.getElementById('otter');
const rock = document.getElementById('rock');

document.addEventListener('keydown', jump);

function jump() {
  if (otter.classList != 'jump') {
    otter.classList.add('jump');
  }
  setTimeout(function () {
    otter.classList.remove('jump');
  }, 500);
}

let active = setInterval(function () {
  let otterTop = parseInt(
    window.getComputedStyle(otter).getPropertyValue('top')
  );
  console.log(parseInt(window.getComputedStyle(otter).getPropertyValue('top')));
  let rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue('left')
  );

  if (rockLeft < 50 && rockLeft > 0 && otterTop >= 140) {
    alert('Game over!');
    return;
  }
}, 10);
