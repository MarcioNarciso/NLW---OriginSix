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
})