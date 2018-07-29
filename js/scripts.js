
document.addEventListener('DOMContentLoaded', () => {

    const imgHero = document.querySelector('.hero');

    //Iniciar las variables
    let i = 0;
    let time = 0;

    // Array de imagenes de fondo
    const images = ['arriba2.jpg', 'arriba.jpg'];

    setInterval( () => {
        imgHero.style.backgroundPositionY = '-'+time+'px';

        if(time > 40) {
            time = 0;
            imgHero.style.backgroundImage = "url(../img/"+images[i]+")";

            if(i === images.length -1) {
                i = 0;
            } else {
                i++;
            }
            console.log(images[i]);
        }
        time++;

        console.log(time)
    }, 100);

    // Boton float en el footer
    const btnFloat = document.querySelector('.btn-float');
    btnFloat.addEventListener('click', (e) => {
        e.preventDefault();

        const footer = document.querySelector('#footer');

        if(footer.classList.contains('active')) {
            footer.classList.remove('active');
            btnFloat.classList.remove("active");
            btnFloat.innerText = 'Idioma y moneda';
        } else {
            footer.classList.add("active");
            btnFloat.classList.add("active");
            btnFloat.innerText = "X Cerrar";
        }
    })
})