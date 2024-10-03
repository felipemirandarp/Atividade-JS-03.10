

let pessoa = {
    nome: "Felipe",
    idade : "17",
    cidade: "Patrocinio"
}

    console.log(`Seu nome é: ${pessoa.nome} sua idade é: ${pessoa.idade} e sua cidade é: ${pessoa.cidade}`)

    do{
        var option = confirm("Você deseja atualizar suas informações ? ")

        var op = Number (prompt("Qual dado você deseja alterar? \n 1 - Idade \n 2 - Cidade "))
        
       switch(op){

        case 1: 
        pessoa.idade = Number (prompt("Digite sua nova idade: "))
        break;

        case 2: 
        pessoa.cidade = (prompt("Digite sua nova cidade: "))
        break
       }

    }while(option)

        console.log(`Seu nome é: ${pessoa.nome} sua idade é: ${pessoa.idade} e sua cidade é: ${pessoa.cidade}`)
    

  