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

function setUnsetHeaderShadowWhenScroll() {

    if (window.scrollY > navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

/**
 * Testimonials carousel/slider.
 */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints : { // Resposividade
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
        #contact .text, #contact .links,
        footer .brand, footer .social
    `, 
    {
        interval: 100
    }
);

/**
 * Botão voltar para o top.
 */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}


/**
 * Menu ativo conforme a seção visível na página
 */
const sections = document.querySelectorAll("main section[id]");

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*="'+sectionId+'"]')
                .classList.add('active');
        } else {
            document
                .querySelector('nav ul li a[href*="'+sectionId+'"]')
                .classList.remove('active');
        }
    };
}



window.addEventListener('scroll', () => {
    setUnsetHeaderShadowWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});
