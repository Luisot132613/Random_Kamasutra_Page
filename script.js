// Simulando um banco de dados com 100 imagens (URLs)
const imagens = [];
for (let i = 1; i <= 100; i++) {
  imagens.push(`./recortes/${i}.png`);
}

const botao = document.getElementById("mostrarImagem");
const imagem = document.getElementById("imagemAleatoria");

botao.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * imagens.length);
  imagem.src = imagens[aleatorio];
});
