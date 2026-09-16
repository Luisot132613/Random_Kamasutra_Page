// Importar as imagens do banco ./recortes c/ o nome do 1.png ao 100.png 
const imagens = [];
for (let i = 1; i <= 100; i++) {
  imagens.push(`./recortes/${i}.png`);
}

const botao = document.getElementById("mostrarImagem"); // Constante botão que retorna id=mostrarImagem no HTML
const imagem = document.getElementById("imagemAleatoria"); // Constante imagem que retorna id=imagemAleatoria no HTML

// Quando o botão é clicado -> gera um numero aleatório equivalente a lista do banco de imagens
// Guarda o valor na const aleatório e muda o src da imagem p/ "{numero}.png -> buscando a imagem correta no .recortes"
botao.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * imagens.length);
  imagem.src = imagens[aleatorio];
});
