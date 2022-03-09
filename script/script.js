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

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'about_me': 'About Me',
        'hero-title': 'Vladimir Makarov',
        'sample_code': 'Sample code',
        'about_me_text-1': 'I am currently taking a higher education course in the specialty of web development at ITMO University. Currently, I have successfully completed the first stage of epam (stage 0). I am currently waiting for the continuation of the educational process. I want to become a Full- stack Developer.',
        'about_me_text-2': 'As I am only at the beginning of my path, I do not currently have a lengthy amount of experience, but am gaining experience through several educational projects. I love to learn and study on my own and I’m currently studying online to achieve my goal of becoming a professional developer.',
        'soft_skills': 'Soft Skills',
        'tech_skills': 'Tech Skills',
        'experience': 'Experience',
        'education': 'Education',
        'English': 'English',
        'my_contacts': 'My contacts',
        'purposes-text': 'I strive for creative, demanded and profitable work. The work of a programmer meets all these goals. Faced with various kinds of tasks and find elegant solutions for them, allows you to assert yourself, and financial independence is a huge plus.',
        'soft_skills-1': 'Communication. Effective communication is key in both work and home settings.',
        'soft_skills-2': 'Willingness to learn. Modern technologies are changing rapidly. I need to learn new things to keep abreast of technological changes and updates throughout the development environment.',
        'soft_skills-3': 'Creativity. Having and creating new visions for projects is exciting and interesting for me.',
        'soft_skills-4': 'Problem solving. I take ownership for any mistakes I make and I am quick to correct them. I am great at finding solutions to problems on my own and in a team setting.',
        'soft_skills-5': 'Teamwork. It is very important for all team members to be heard and work cooperatively for the success of all projects and the company as a whole.',
        'soft_skills-6': 'Open-mindedness. I look at problems as an opportunity to increase my knowledge of web development.',
        'English-text': 'Level: A2-B1  I studied English in school. Upon entering my university I also continued to study English. After attending university, I finished 2 levels at a language school. I use English in my international travels to communication with people. ',
        'experience-projects': 'I’ve several educational projects. Here are some of them',
        'purposes': 'Purposes',

    },
    'ru': {
        'skills': 'Навыки',
        'about_me': 'Обо мне',
        'hero-title': 'Владимир Макаров',
        'sample_code': 'Пример кода',
        'about_me_text-1': 'Я закончил курс профессиональной переподготовки по специальности информационные системы и технологии в Университете ИТМО. Успешно закончил первую ступень epam The Rolling Scopes School (stage 0), в планах завершить обучение (stage 1, stage 2). ',
        'about_me_text-2': 'Поскольку я только в начале профессионального пути, я набираюсь опыта в нескольких образовательных проектах (freecodecamp.org) и профессиональных сообществах. Хочу стать профессиональным разработчиком веб-приложений, и для достижения своей цели изучаю JavaScript и фреймворки',
        'soft_skills': 'Софт Скиллс',
        'tech_skills': 'Тех. навыки',
        'experience': 'Опыт',
        'education': 'Образование',
        'English': 'Английский',
        'my_contacts': 'Мои контакты',
        'purposes-text': 'Устроиться в IT компанию на должность веб-разработчика. Расширить и углубить свои знания в . Я стремлюсь к творческой, востребованной и прибыльной работе. Работа программиста отвечает всем этим целям. Устроиться в it компанию',
        'soft_skills-1': 'Общение. Эффективная коммуникация играет ключевую роль как на работе, так и дома.',
        'soft_skills-2': 'Готовность учиться. Современные технологии быстро меняются. Мне нужно изучать что-то новое, чтобы быть в курсе технологических изменений и обновлений во всей среде разработки.',
        'soft_skills-3': 'Креативность. Иметь и создавать новые видения для проектов - это захватывающе и интересно для меня.',
        'soft_skills-4': 'Решение проблем. Я беру на себя ответственность за любые ошибки, которые совершаю, и быстро их исправляю. Я отлично умею находить решения проблем самостоятельно и в командной обстановке.',
        'soft_skills-5': 'Командная работа. Очень важно, чтобы все члены команды были услышаны и работали сообща для успеха всех проектов и компании в целом.',
        'soft_skills-6': 'Широта взгляда. Я рассматриваю проблемы как возможность расширить свои знания в области веб-разработки.',
        'English-text': 'Уровень: A2-B1 (средний)  Я изучал английский в школе. Поступив в свой университет, я также продолжил изучать английский язык. После учебы в университете я закончил 2 уровня в языковой школе. Я использую английский язык в своих международных поездках для общения с людьми.',
        'experience-projects': 'У меня есть несколько образовательных проектов. Вот некоторые из них.',
        'purposes': 'Цели',

    }
}

const russian = document.querySelector('.ru');
const english = document.querySelector('.en');
const words = document.querySelectorAll('[data-i18]');


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('ru-lang') == 'true') {
        getTranslateRu();
    }
});

function getTranslateRu() {
    english.classList.remove('item__active');
    russian.classList.add('item__active');
    words.forEach(el => {
        const text = i18Obj.ru[el.dataset.i18];
        if (el.placeholder) {
            el.placeholder = text;
        }
        el.textContent = text;
    });
    window.localStorage.setItem('ru-lang', true);
}

function getTranslateEn() {
    russian.classList.remove('item__active');
    english.classList.add('item__active');
    words.forEach(el => {
        const text = i18Obj.en[el.dataset.i18];
        if (el.placeholder) {
            el.placeholder = text;
        }
        el.textContent = text;
    });
    window.localStorage.setItem('ru-lang', false);
}

russian.addEventListener('click', getTranslateRu);
english.addEventListener('click', getTranslateEn);
