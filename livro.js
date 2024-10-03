let livro = {
    nome: "",
    autor: "",
    ano: "",
}

    livro.nome = prompt("Digite o nome do primeiro livro: ")
    livro.autor = prompt("Digite o nome do autor do primeiro livro: ")
    livro.ano = Number(prompt("Digite o ano de publicação do primeiro livro: "))

let livro2 = {
    nome: "",
    autor: "",
    ano: "",
}

    livro2.nome = prompt("Digite o nome do segundo livro: ")
    livro2.autor = prompt("Digite o nome do autor do segundo livro: ")
    livro2.ano = Number(prompt("Digite o ano de publicação do segundo livro: "))

if (livro.ano < livro2.ano) {

    console.log(`O livro mais antigo é: ${livro.ano}`)

}else if(livro2.ano < livro.ano){

    console.log(`O livro mais antigo é: ${livro2.ano}`)
}

if(livro.nome == "estudando programação" || livro2.nome == "estudando programação" ){

    console.log("SIM")

}else{

    console.log("NÃO")

}

if(livro.autor == livro2.autor){

    console.log(`O autor dos livros são: ${livro.autor}`)

}else{
    console.log("Os autores não são iguais")
}