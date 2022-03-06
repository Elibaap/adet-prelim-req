const animation1 = document.querySelector('.animation1');
const animation2 = document.querySelector('.animation2');
const animation3 = document.querySelector('.animation3');
const animation4 = document.querySelector('.animation4');
const animation5 = document.querySelector('.animation5');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

const reset = () => {
  animation1.classList.add('hide');
  animation2.classList.add('hide');
  animation3.classList.add('hide');
  animation4.classList.add('hide');
  animation5.classList.add('hide');
};

reset();

btn1.addEventListener('click', () => {
  reset();
  animation1.classList.toggle('hide');
});

btn2.addEventListener('click', () => {
  reset();
  animation2.classList.toggle('hide');
});

btn3.addEventListener('click', () => {
  reset();
  animation3.classList.toggle('hide');
});

btn4.addEventListener('click', () => {
  reset();
  animation4.classList.toggle('hide');
});

btn5.addEventListener('click', () => {
  reset();
  animation5.classList.toggle('hide');
});

/**
 * TODO gian:
 * xamsxa msd smasd qwe qwej
 */