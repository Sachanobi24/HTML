// --- MENU HAMBURGER ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // fermer le menu quand on clique sur un lien
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
}

// --- ANIMATIONS AU SCROLL ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('h1, h2, p, .card').forEach(el => {
  observer.observe(el);
});

// --- MACHINE À ÉCRIRE ---
document.querySelectorAll('.typewriter').forEach(el => {
  const text = el.textContent;
  el.textContent = "";
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = (char === " ") ? "\u00A0" : char; // espace insécable
    span.style.animationDelay = `${i * 0.08}s`; // délai progressif
    el.appendChild(span);
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const src = section.getAttribute("data-src");
        if (src) {
            fetch(src)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erreur de chargement : ${src}`);
                    }
                    return response.text();
                })
                .then(data => {
                    section.innerHTML = data;
                })
                .catch(error => {
                    section.innerHTML = `<p style="color:red;">Impossible de charger ${src}</p>`;
                    console.error(error);
                });
        }
    });

    // Animation barre de progression
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + "%";
    });
});



