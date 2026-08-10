const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("open");

    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        hamburger.classList.remove("open");

    });

});

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

"section, .experience-card, .project-card, .timeline-item, .achievement-card, .about-card, .contact-card"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

const heroImage = document.querySelector(".image-box");

if (heroImage) {

    heroImage.addEventListener("mousemove", e => {

        const rect = heroImage.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - .5) * 12;

        const rotateX = (rect.height / 2 - y) / 18;

        heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });

    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}

document.querySelectorAll(".skills span").forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "translateY(-6px)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "translateY(0px)";

    });

});

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 30) {

        nav.style.background = "rgba(12,12,12,.92)";

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        nav.style.background = "rgba(15,15,15,.75)";

        nav.style.boxShadow = "none";

    }

});

console.log("%cPortfolio Loaded ", "color:#FFD54F;font-size:18px;font-weight:bold;");