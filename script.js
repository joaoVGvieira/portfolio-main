document.addEventListener("DOMContentLoaded", function() {

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

    const titulo = document.querySelector('#quem-sou');
    const textoOriginal = "Olá! Sou João Vitor.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textoOriginal.substring(0, index);
        titulo.textContent = currentText + (isDeleting ? '' : '|');

        if (!isDeleting && index < textoOriginal.length) {
            index++;
            setTimeout(typeEffect, 200);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeEffect, 230);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, 2000); 
        }
    }
    
    if(titulo) {
       typeEffect();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    const hiddenElements = document.querySelectorAll('.section-hidden');
    hiddenElements.forEach((el) => observer.observe(el));


    function setupFiltroProjetos() {
        const skillCards = document.querySelectorAll('#habilidades .tecnologia');
        const projectCards = document.querySelectorAll('#projetos .projeto');
        
        const projetosSection = document.querySelector('#projetos');

        skillCards.forEach(skill => {
            skill.addEventListener('click', () => {
                
                const filtro = skill.dataset.tech;
                
                skillCards.forEach(s => {
                    s.classList.remove('filtro-ativo');
                    s.classList.add('filtro-inativo');
                });
                skill.classList.add('filtro-ativo');
                skill.classList.remove('filtro-inativo');

                projectCards.forEach(card => {
                    const techsDoCard = card.dataset.tech;
                    
                    if (filtro === undefined) { 
                        card.classList.remove('projeto-filtrado');
                    } else {
                        if (techsDoCard && techsDoCard.split(' ').includes(filtro)) {
                            card.classList.remove('projeto-filtrado');
                        } else {
                            card.classList.add('projeto-filtrado');
                        }
                    }
                });

                if (projetosSection) {
                    projetosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

            });
        });
    }

    setupFiltroProjetos();

});

function setupFiltroProjetos() {
    const skillCards = document.querySelectorAll('#habilidades .tecnologia');
    const projectCards = document.querySelectorAll('#projetos .projeto');

    skillCards.forEach(skill => {
        skill.addEventListener('click', () => {
            const filtro = skill.dataset.tech;
            
            skillCards.forEach(s => {
                s.classList.remove('filtro-ativo');
                s.classList.add('filtro-inativo');
            });
            skill.classList.add('filtro-ativo');
            skill.classList.remove('filtro-inativo');

            projectCards.forEach(card => {
                const techsDoCard = card.dataset.tech;
                
                if (filtro === undefined) { 
                    card.classList.remove('projeto-filtrado');
                } else {
                    if (techsDoCard && techsDoCard.includes(filtro)) {
                        card.classList.remove('projeto-filtrado');
                    } else {
                        card.classList.add('projeto-filtrado');
                    }
                }
            });
        });
    });
}

