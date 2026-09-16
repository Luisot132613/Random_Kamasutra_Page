// Importar as imagens do banco ./recortes c/ o nome do 1.png ao 100.png 
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
