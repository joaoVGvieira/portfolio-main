document.addEventListener("DOMContentLoaded", function() {

    // NAVEGAÇÃO SUAVE
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ANIMAÇÃO DE DIGITAÇÃO
    const titulo = document.querySelector('#quem-sou');
    const textoOriginal = "Olá! Sou João Vitor.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textoOriginal.substring(0, index);
        titulo.textContent = currentText + (isDeleting ? '' : '|');

        if (!isDeleting && index < textoOriginal.length) {
            index++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, 1200); // Pausa antes de começar a apagar/redigitar
        }
    }
    
    // Inicia o efeito apenas se o elemento existir
    if(titulo) {
       typeEffect();
    }

    // ANIMAÇÃO AO ROLAR (FADE IN)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Opcional: para a animação não repetir
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
    });

    const hiddenElements = document.querySelectorAll('.section-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});