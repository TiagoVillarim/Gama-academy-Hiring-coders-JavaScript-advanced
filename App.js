const arrayLivros = require("./dataBase");

//pegar o input do usuario
const readline = require('readline-sync');

const entradaInicial = readline.question("deseja buscar um livro?(S/N) ");

if(entradaInicial.toLocaleUpperCase() === "S"){
  console.log("essas são as categorias:")
  console.log("/produtividade e estilo de vida", "/historia brasileira", "/americas", "/fantasia",
  "/aventura");
  
  const entradaCategoria = readline.question("qual categoria você escolhe?");

  const retorno = arrayLivros.filter(livros => livros.categoria === entradaCategoria);
  console.table(retorno);

}else{
  const livrosOrdenados = arrayLivros.sort((a, b) => a.paginas - b.paginas);
  console.log("esses são os livros disponíveis:");
  console.table(livrosOrdenados);
};