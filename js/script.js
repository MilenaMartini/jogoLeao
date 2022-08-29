const leao = document.querySelector('.leao');
const pedra = document.querySelector('.pedra');


const pulo = () => {
    leao.classList.add('pulo');

    setTimeout(() => {
        leao.classList.remove('pulo');
    },550);
 }

const loop = setInterval(() => {

    console.log('loop')
    const pedraPosition = pedra.offsetLeft;
    const leaoPosition = +window.getComputedStyle(leao).bottom.replace('px', '');


    console.log(leaoPosition);
    if(pedraPosition <= 90 && pedraPosition > 0 && leaoPosition < 20){

        pedra.style.animation = 'none' ;
        pedra.style.left = `${pedraPosition}px`;

        leao.style.animation = 'none' ;
        leao.style.bottom = `${leaoPosition}px`;

        leao.src = './img/leaotriste.gif';
        leao.style.bottom = '-6.6%'

        clearInterval(loop);

    }
},10);

 document.addEventListener('keydown', pulo);