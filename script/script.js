const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('.body');

let i = 0;

function toggleClass() {
    if (i == 0) {
        burger.classList.add('active');
        burger.classList.add('active:before');
        burger.classList.add('active:after');
        menu.classList.add('active');
        body.classList.add('lock');
        i = 1;
    } else {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        i = 0;
    }
}

let List = document.querySelectorAll('.header-link')
List.forEach(item => {
    item.addEventListener('click', (e) => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
        i = 0;
    })
})

burger.addEventListener('click', toggleClass);

console.log('1. markup is valid    +10 \n 2. semantic markup, HTML5 tags: figure, footer, header, main, nav, section, time and tags h1, h2, h3, h4    +20 \n 3. css slyles    +10 \n 4. content is placed in a block that is horizontally centered on the page. The background color stretches to the full width of the page    +10');
console.log('5. adaptive markup    +10 \n 6. adaptive burger menu    +10 \n 7. photo of the author CV    +10 \n 8. contacts for communication and a list of skills are designed as a list ul> li    +10');
console.log('9. CV contains contacts for communication, brief information about myself, a list of skills, information about education and level of English     +10 \n 10. code example with highlighting.   +10');
console.log('11. CV contains images-links to completed ones. When you click on the image, the project page opens in a new tab. Each project has a name, a short description, and a list of technologies used.   +10 \n 12. CV made in English +10');

