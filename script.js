// Botoes menu
const paginaHome = document.querySelector('#pagina-home');
const paginaSobreMim = document.querySelector('#pagina-sobre-mim');
const paginaHabilidades = document.querySelector('#pagina-habilidades');
const paginaProjetos = document.querySelector('#pagina-projetos');

//Botoes projeto
const botaoAbreFacelita = document.querySelector("#botao-facelita");
const botaoFechaFacelita = document.querySelector("#x");

//Divs
const divHome = document.querySelector('#home');
const divSobreMim = document.querySelector('#sobre-mim');
const divHabilidades = document.querySelector('#habilidades');
const divProjetos = document.querySelector('#projetos');

//Popup
const popupsDiv = document.querySelector("#popups");
const popupFacelita = document.querySelector(".popup-facelita");

paginaHome.addEventListener("click", function(){
    divHome.scrollIntoView({ behavior: 'smooth' });
})

paginaSobreMim.addEventListener("click", function(){
  divSobreMim.scrollIntoView({ behavior: 'smooth' });
})

paginaHabilidades.addEventListener("click", function(){
  divHabilidades.scrollIntoView({ behavior: 'smooth' });
})

paginaProjetos.addEventListener("click", function(){
  divProjetos.scrollIntoView({ behavior: 'smooth' });
})



const titulo = document.querySelector('#quem-sou');
const texto = "Olá! Prazer Sou João Vitor!!!";
let index = 0;
let escrevendo = true;

function digitar() {
  if (escrevendo) {
    if (index < texto.length) {
      titulo.textContent = texto.slice(0, index + 1) + "|";
      index++;
    } else {
      escrevendo = false;
      setTimeout(() => apagar(), 1000);
    }
  }
}

function apagar() {
  if (!escrevendo) {
    if (index > 0) {
      titulo.textContent = texto.slice(0, index - 1) + "|";
      index--;
    } else {
      escrevendo = true;
    }
  }
}

setInterval(() => {
  escrevendo ? digitar() : apagar();
}, 220);

