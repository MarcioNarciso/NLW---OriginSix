/**
 * Abre e fecha o menu quando clicar no icone: hamburguer e "X"
 */
const nav = document.querySelector('#header nav');
const toggles = document.querySelectorAll('#header nav .toggle');

// for para percorrer propriedades de um objeto
for (const element of toggles) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

/**
 * Quando clicar em um item do menu, fechar o menu.
 */
const links = document.querySelectorAll('#header nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
}

/**
 * Adicionar a sombra no header da página quando der scroll.
 */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

/**
 * Testimonials carousel/slider.
 */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

/**
 * ScrollReveal: mostrar elementos quando der scroll na página.
 */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `
        #home .image, #home .text,
        #about .image, #about .text,
        #services header, #services .card,
        #testimonials header, #testimonials .textimonials,
        #contact .text, #contact .links
    `, 
    {
        interval: 100
    }
);