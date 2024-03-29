
const container = document.querySelector('.navbar-wrapper');
document.querySelector('.open-navbar-icon').
    addEventListener('click', () => {
        container.classList.add("changeMenu");
    });
document.querySelector('.close-navbar-icon').
    addEventListener('click', () => {
        container.classList.remove("changeMenu");
    });
document.querySelector('.nav-list').addEventListener('click', () => {
    container.classList.remove("changeMenu");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;
Array.from(document.querySelectorAll(".nav-link")).
    forEach((item) => {
        item.style.cssText = `background-color: ${colors[i++]}`
    });

Array.from(document.querySelectorAll
    (".navigation-button")).forEach((item) => {
        item.onclick = () => {
            item.parentElement.parentElement.classList.toggle("change");
        }
    })

const scrollline = document.querySelector('.scroll-line');
function fillscrollline() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
    scrollline.style.width = percentScrolled + '%';
};
window.addEventListener('scroll', fillscrollline);