const leao = document.querySelector('.leao');
const pedra = document.querySelector('.pedra');


const pulo = () => {
    leao.classList.add('pulo');

    setTimeout(() => {
        leao.classList.remove('pulo');
    },500);
 }

const loop = setInterval(() => {
    const pedraPosition = pedra.offsetLeft;

    if(pedraPosition <= 98){

        pedra.style.animation = 'none' ;
        pipe.style.left = `${pedraPosition}px`;
    }
},10);

 document.addEventListener('keydown', pulo);