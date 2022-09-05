const body = document.querySelector('.app');
const titulo = document.querySelector('.logoTitulo');
const addPalavraBtn = document.querySelector('#btn2');
const modoClaro = document.querySelector(".on");
const modoOscuro = document.querySelector(".off");
const chamada = document.querySelector(".chamada");
const forca = document.querySelector(".forca");

modoClaro.addEventListener("click", () => {
  modoClaro.classList.add("ativo");
    modoOscuro.classList.remove("ativo");
    body.classList.remove("dark");
    titulo.classList.remove("claro");
    addPalavraBtn.style.color = "#0A3871";
    modoClaro.style.opacity = "1";
    modoOscuro.style.opacity = "0.7";
    forca.classList.remove("forca-clara");
});

modoOscuro.addEventListener("click", () => {
    modoOscuro.classList.add("ativo");
    modoClaro.classList.remove("ativo");
    body.classList.add("dark");
    titulo.classList.add("claro");
    addPalavraBtn.style.color = "#e5e5e5";
    modoClaro.style.opacity = "0.3";
    modoOscuro.style.opacity = "1";
    forca.classList.add("forca-clara");

});
  
console.log(chamada.textContent);