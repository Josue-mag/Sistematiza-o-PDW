let index = 0;
const imagens = document.querySelectorAll('.carousel img');
const total = imagens.length;

function mudarSlide(direcao) {
    index += direcao;

    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    document.querySelector('.carousel').style.transform = `translateX(${-index * 400}px)`;
}