const body = document.querySelector('.app');
const titulo = document.querySelector('.logoTitulo');
const botoes = document.querySelectorAll('.botao');
const modoClaro = document.querySelector(".on");
const modoOscuro = document.querySelector(".off");
const chamada = document.querySelector(".chamada");
const forca = document.querySelector(".forca");

modoClaro.addEventListener("click", () => {
  modoClaro.classList.add("ativo");
    modoOscuro.classList.remove("ativo");
    body.classList.remove("dark");
    titulo.classList.remove("claro");
    modoClaro.style.opacity = "1";
    modoOscuro.style.opacity = "0.7";
    forca.classList.remove("forca-clara");
    botoes[0].classList.remove("dark");
    botoes[1].classList.remove("dark");
});

modoOscuro.addEventListener("click", () => {
    modoOscuro.classList.add("ativo");
    modoClaro.classList.remove("ativo");
    body.classList.add("dark");
    titulo.classList.add("claro");
    modoClaro.style.opacity = "0.3";
    modoOscuro.style.opacity = "1";
    forca.classList.add("forca-clara");
    botoes[0].classList.add("dark");
    botoes[1].classList.add("dark");

});

console.log(botoes);