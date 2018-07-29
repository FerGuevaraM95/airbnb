
document.addEventListener('DOMContentLoaded', () => {

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