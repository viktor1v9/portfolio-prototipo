
/*document.addEventListener("DOMContentLoaded", function () {
    // Efeito de digitação
    const textElement = document.getElementById("typing-effect");
    const text = "Anakin";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();
    
    //   Modo escuro e claro
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
    
    let menuIcon = document.querySelector('#menu-icon');
    let topnav = document.querySelector('.top-nav');
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        topnav.classList.toggle('active')
    }
    
    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
        });
        });*/



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(e => {
        let top = window.scrollY;
        let offset = e.offsetTop - 100; // opcional: para ativar um pouco antes
        let height = e.offsetHeight;
        let id = e.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
    
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    menuIcon.classList.remove('fa-xmark');
    topnav.classList.remove('active');
    
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form ', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Mestre Jedi', 'Lord Sith', 'Pai de menina'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


/* 
window.onscroll = () => {
    sections.forEach(e => {
        let top = window.scrollY;
        let offset = e.offsetTop;
        let height = e.offsetHeight;
        let id = e.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    topnav.classList.remove('active');

};

*/