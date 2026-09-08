/* =========================
   MENU MOBILE
========================= */

function abrirMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


/* =========================
   MODAL DAS TRILHAS
========================= */

function mostrarTrilha(trilha) {

    const modal = document.getElementById("modal");

    const titulo = document.getElementById("modalTitulo");

    const texto = document.getElementById("modalTexto");


    if (trilha === "Pedra") {

        titulo.innerText = "Trilha da Pedra";

        texto.innerText =
            "Uma trilha perfeita para quem quer começar a explorar as belezas naturais do Rio. Prepare a água, o tênis e a câmera!";

    }


    if (trilha === "Montanhas") {

        titulo.innerText = "Caminho das Montanhas";

        texto.innerText =
            "Uma aventura de nível moderado para quem já está acostumado com trilhas e quer aproveitar uma paisagem incrível.";

    }


    if (trilha === "Pico") {

        titulo.innerText = "Desafio do Pico";

        texto.innerText =
            "Essa é para quem gosta de desafio! Uma subida mais intensa, mas com aquela vista que faz todo o esforço valer a pena.";

    }


    modal.classList.add("active");

}


/* =========================
   FECHAR MODAL
========================= */

function fecharModal() {

    const modal = document.getElementById("modal");

    modal.classList.remove("active");

}


/* =========================
   FECHAR CLICANDO FORA
========================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        fecharModal();

    }

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("active");

    });

});
