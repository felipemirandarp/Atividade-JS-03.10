let carro = {
    modelo: "",
    marca: "",
    ano: "",
    valor: "",
}

let carros = []
var op

    do{
        carro.modelo = prompt("Digite o modelo do carro: ")
        carro.marca = prompt("Digite a marca do carro: ")
        carro.ano = Number(prompt("Digite o ano do carro: "))
        carro.valor = parseFloat(prompt("Digite o valor do carro: "))

        carros.push (carro)

        op = confirm("Você deseja continuar? ")

    }while(op)

        for(let i = 0; i < carros.length; i++){

            let maiorvalor = 0 
            var indicemaiorvalor = 0 

            if( i == 0 ){
                maiorvalor = carros[i].valor
                indicemaiorvalor  = i 
                
            }else{
                if( carros[i].valor > maiorvalor ){
                    maiorvalor = carros[i].valor
                    indicemaiorvalor  = i 
                }
            }   



        }
        

        console.log(carros[indicemaiorvalor])
