const body = document.querySelector('.app');
const titulo = document.querySelector('.logoTitulo');
const modoClaro = document.querySelector(".on");
const modoOscuro = document.querySelector(".off");
const forca = document.querySelector(".forca");
const botoes = document.querySelectorAll('.botao');

modoClaro.addEventListener("click", () => {
  modoClaro.classList.add("ativo");
    modoOscuro.classList.remove("ativo");
    body.classList.remove("dark");
    titulo.classList.remove("claro");
    modoClaro.style.opacity = "1";
    modoOscuro.style.opacity = "0.7";
  forca.classList.remove("forca-clara");
  botoes[1].style.color = "#0A3871";
  
});

modoOscuro.addEventListener("click", () => {
    modoOscuro.classList.add("ativo");
    modoClaro.classList.remove("ativo");
    body.classList.add("dark");
    titulo.classList.add("claro");
    modoClaro.style.opacity = "0.3";
    modoOscuro.style.opacity = "1";
    forca.classList.add("forca-clara");
    botoes[1].style.color = "#e5e5e5";
});
