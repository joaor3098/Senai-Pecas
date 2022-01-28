//variaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 50

// pesoPeca - Camel Case
// peso_peca - Snake Case
// pesoPeca - Pascal Case

if(pesoPeca >100) {
    console.log("Peso maior que 100g, logo podemos cadastrar a peça")
}else {
    console.log("Peso insufiente, não é possível cadastrar.")
}

let numeroPecas;

numeroPecas = 10
//number

numeroPecas = "vários"
//string

const teste = 300;

 teste = 500;

if(numeroPecas <10) {
    console.log("Ainda hà espaço na caixa, podemos cadastrar a peça")
}else{
    console.log("não há espaço disponível na caixa")
}


let nomePeca = "compriemento do freio"

//ASCII TABLE

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possivel cadastrar")
}else{
    console.log("Nome de peça adequado,podemos cadastrar")
}
