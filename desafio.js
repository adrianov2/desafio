
//01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = "dia"; 

if (dia === "dia") {
    console.log("Está claro");
} else {
    console.log("Está de noite");
}


//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


//03 - crie uma função que exiba uma mensagem no console

function exibirMensagem() {
    console.log("dev vai na web T3");
}

exibirMensagem();



//04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibirNome(nome) {
    console.log(nome);
}

exibirNome("adriano");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibirInformacoes(nome, idade, estiloMusical) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical: ${estiloMusical}`);
}

exibirInformacoes("Adriano", 34, "Rap");


//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibirFilmeEMusica(filme, musica) {
    console.log(`Filme: ${filme}, Música: ${musica}`);
}

exibirFilmeEMusica("Adao negro", "um bom lugar");


//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triploDoNumero(numero) {
    return numero * 10;
}

console.log(triploDoNumero(5)); // Exemplo: retorna 15

//08 - crie uma função que  verifique se uma  variável é true ou false

function verificarTrueOuFalse(valor) {
    if (valor === true) {
        console.log("É verdadeiro");
    } else {
        console.log("É falso");
    }
}

verificarTrueOuFalse(true); 


//09 - Crie um array que receba 5 itens e exiba no console.

let meuArray = ["feijão-preto", "bacon", "charque", "calebrasa", "linguiça-defumada"];
console.log(meuArray);

//10 - Utilize um método para adicionar um nome ao inicio do array.

meuArray.unshift("vai na web");
console.log(meuArray);

//11 - Utilize um método para remover o último nome do array.

meuArray.pop();
console.log(meuArray);

//12 - Utilize um método para adicionar dois nomes ao fim do array.

meuArray.push("adriano", "vagner");
console.log(meuArray);

//13 - Utilize um método para remover o primeiro nome do array.


meuArray.shift();
console.log(meuArray);


1//4 - Utilize um método para adicionar no meio deste array.
let nome = ["João",  "Maria",  "Jose",  "Pedro"]

meuArray.splice(2, 0, "adriano");
console.log(meuArray);

//15 - Utilize um método para organizar em ordem crescente o seguinte array:


let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);



