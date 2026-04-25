function abrirNoticia(pagina) {
  window.location.href = pagina;
}function abrirNoticia(pagina) {
  window.location.href = pagina;
}

function buscarNoticias() {
  let input = document.getElementById("campoBusca").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let titulo = card.querySelector("h2").innerText.toLowerCase();
    let texto = card.querySelector("p").innerText.toLowerCase();

    if (titulo.includes(input) || texto.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}