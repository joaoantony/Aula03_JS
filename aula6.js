//Criando uma data com o momento atual
const dataAtual = new Date();

//Exibe a data completa no console
console.log(dataAtual);

//Mostrar a data manipulada 
console.log(dataAtual.getDate());

//Visualizar somente o mês
console.log(dataAtual.getMonth()+1);

//Pegando o ano completo
console.log(dataAtual.getFullYear());

//Pegando horas, minutos e segundos
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

const data = new Date();

//Criando uma váriavel formatada manualmente
const dataFormatada = data.getDate()+" / "+(data.getMonth()+1)+" / "+data.getFullYear();

console.log(dataFormatada);

//Array / Lista//

let cores = ["azul","rosa"];
cores.push("vermelho");
console.log(cores);

cores.pop();
console.log(cores);

let numeros = [1,2,3,4];
numeros.forEach(numero => {
    console.log(numero);
})

//Percorre o array e retorna um novo array com valores transformados
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

let numeros1 = [1,2,3,4,5,10,20,30,40,50];
let maioresQueDez = numeros1.filter(numero => numero > 10);
console.log(maioresQueDez);

const numeros2 = [1,2,3];
//Criando uma cópia usando o spread
const copia = [...numeros2];

console.log("Original: ", numeros2);
console.log("Cópia: ", copia);

const lista1 = [1,2];
const lista2 = [3,4];

//Unindo as arrays com spread
const listaCompleta = [...lista1,...lista2];

console.log(listaCompleta);

/*
Sintaxe de criação das funções

function nome(argumento1,argumento2,...,argumentoN) {
//Corpo da função
}
*/

/* Criar as variáveis */
let numero1=10,numero2=2;

/* Executa as 4 operações */
console.log(`Soma: ${somar(numero1,numero2)}`);
console.log(`Subtração: ${subtrair(numero1,numero2)}`);
console.log(`Multiplicação: ${multiplicar(numero1,numero2)}`);

const divisao = dividir(numero1,numero2);

/* Valida o resultado da divisão */
if(divisao === Infinity)
    console.log("Não existe divisão por Zero");
else 
    console.log(`Divisão: ${divisao}`);


/* Funções de Cálculo */

function somar(numero1,numero2){
    return numero1+numero2
};

function subtrair(numero1,numero2){
    return numero1-numero2
};

function multiplicar(numero1,numero2){
    return numero1*numero2
};

function dividir(numero1,numero2){
    return numero1/numero2
};

