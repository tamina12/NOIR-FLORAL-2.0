/* ==================================================
   NOIR FLORAL
   CREATIVE EXPERIENCE
================================================== */


/* ==================================================
   BODY LOCK
================================================== */

document.body.classList.add("loading");


/* ==================================================
   CREATIVE LOADER
================================================== */

const loader = document.querySelector(".design-loader");
const loaderLine = document.querySelector(".loader-line span");
const loaderPercent = document.querySelector(".loader-status strong");

let progress = 0;

const loadingInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 5) + 1;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loadingInterval);

    }

    loaderLine.style.width = `${progress}%`;
    loaderPercent.textContent = `${String(progress).padStart(2, "0")}%`;

}, 55);


window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("finished");

        document.body.classList.remove("loading");

    }, 1800);

});


/* ==================================================
   MOBILE MENU
================================================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ==================================================
   REVEAL ON SCROLL
================================================== */

const revealElements = document.querySelectorAll(
    ".intro-main, .flower-card, .manifesto-content, .custom-text, .custom-visual, .journal-card, .contact-content"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==================================================
   HERO PARALLAX
================================================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if (scrollY < window.innerHeight) {

        heroImage.style.transform =
            `scale(1) translateY(${scrollY * 0.12}px)`;

    }

});


/* ==================================================
   MANIFESTO PARALLAX
================================================== */

const manifestoImage =
    document.querySelector(".manifesto-image");


window.addEventListener("scroll", () => {

    if (!manifestoImage) return;

    const rect =
        manifestoImage.parentElement.getBoundingClientRect();

    if (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    ) {

        const movement =
            (window.innerHeight - rect.top) * 0.06;

        manifestoImage.style.transform =
            `translateY(${movement}px) scale(1.05)`;

    }

});


/* ==================================================
   MAGNETIC BUTTON
================================================== */

const buttons =
    document.querySelectorAll(
        ".hero-button, .outline-button, .contact-button"
    );


buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect = button.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.06}px, ${y * 0.06}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0,0)";

    });

});


/* ==================================================
   FLOWER CARD INTERACTION
================================================== */

const flowerCards =
    document.querySelectorAll(".flower-card");


flowerCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const image =
            card.querySelector(".flower-image");

        const rect =
            card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width;

        const y =
            (event.clientY - rect.top) /
            rect.height;

        image.style.setProperty(
            "--mouse-x",
            `${x * 100}%`
        );

        image.style.setProperty(
            "--mouse-y",
            `${y * 100}%`
        );

    });

});


/* ==================================================
   SMOOTH ANCHORS
================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ==================================================
   IMAGE PRELOAD
================================================== */

const imageUrls = [

    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2200&q=90",

    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90",

    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=90",

    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=90",

    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2200&q=90",

    "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1600&q=90",

    "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=85",

    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85"

];


imageUrls.forEach(url => {

    const image = new Image();

    image.src = url;

});


/* ==================================================
   KEYBOARD ESCAPE
================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

    }

});
