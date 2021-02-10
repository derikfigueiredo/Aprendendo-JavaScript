/**
 * Aritméticos
 * + Adição/Concatenação(Concatenação é unir dois valores 5+5=55)
 *  - / *
 * Potenciação = **;
 * Resto da divisão = % ;
 */

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);


const num3 = 5;
const num4 = 2;
const num5 = 10;
console.log((num1 + num2) * num3);


//CONTADOR COM OPERADOR INCREMENTO
let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador);


//CONTADOR COM ++ DEPOIS(pós decremento)
let contador2 = 1
console.log(contador2++);
console.log(contador2);
//Resultado é 1 e depois que é 2



//CONTADOR COM ++ ANTES(operador de Incremento)

let contador3 = 1
console.log(++contador2);
//Nesse caso o valor já sai 2;


//OPERADOR DE DECREMENTO
let contador4 = 10;
console.log(--contador4);


//INCREMENTO MAIS DE UM VALOR
const passo = 2;
let contador5 = 1;

contador5 = contador5 + passo;
console.log(contador5);  
contador5 = contador5 + passo;
console.log(contador5);
contador5 = contador5 + passo;
console.log(contador5);