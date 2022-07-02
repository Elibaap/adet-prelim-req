
const animation = document.querySelectorAll('.animation');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

const reset = () => {
  animation.forEach(query => {
    query.classList.add('hide');
  })
}

reset();

function animate(btn, anm){
  btn.addEventListener('click', () => {
    reset();
    anm.classList.toggle('hide');
  });
}

animate(btn1, animation1);
animate(btn2, animation2);
animate(btn3, animation3);
animate(btn4, animation4);
animate(btn5, animation5);