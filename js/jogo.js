const log = console.log;
const body = document.querySelector(".app");
const titulo = document.querySelector(".logoTitulo");
const botoes = document.querySelectorAll(".botao");
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

const palavras = [
  "ecossistema",
  "mata atlantica",
  "desmatamento",
  "oceano",
  "floresta",
  "deserto",
  "bioma",
  "vegetacao",
  "animais",
  "plantas",
  "agua",
  "clima",
  "natureza",
  "vida",
  "sustentabilidade",
  "reciclagem",
  "lixo",
  "poluicao",
  "energia",
  "recursos",
  "minerais",
  "mineracao",
  "mineralogia",
  "caatinga",
  "pampa",
  "cerrado",
  "pantanal",
  "amazonia",
  "patagonia",
  "savana",
  "africa",
];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const letrasErradas = [];
const letrasCorretas = [];

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function mostrarAviso() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 2000);
}

function mostrarLetrasErradas() {
  const resultadoLetrasErradas = document.querySelector(
    ".letras-erradas-container"
  );
  resultadoLetrasErradas.innerHTML = "";
  letrasErradas.forEach((letra) => {
    resultadoLetrasErradas.innerHTML += `<span class='resultado-erro'>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else if (letra === " ") { 
      container.innerHTML += `<span> </span>`;
    }
    else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "flex";
  }
}

function checarResultado() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {
    mensagem = `<span id='popup-derrota'>Que pena, você perdeu. :'( <br/> Mas não desanime, tente novamente! <br/> A palavra correta era: <strong id='palavraSecreta'> ${palavraSecreta.toLocaleUpperCase()}</strong>.`;
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns! Você ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function reiniciarJogo() {
  window.location.reload(); //recarrega a página (f5)
}

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarResultado();
}

document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode;
  if (isLetra(codigo)) {
    const letra = evento.key;
    if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
      mostrarAviso();
    } else {
      if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});
