let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); //Transformando num1 que é um number em uma string para ocorrer a concatenação.


/*////////////// REPRESENTAÇÃO BINÁRIA /////////////*/
num1 = 1500;
console.log(num1.toString(2)); //Respresentação binária
/////////////////////////////////////////////////////

 
console.log(num2.toFixed(2)); //Arredondar/definir quantas casas decimais o número terá.


console.log(Number.isInteger(num1)); //O número é inteiro ou não.



let temp = num1 * 'Olá';
console.log(temp); //O resultado será NaN(Not a number);
console.log(Number.isNaN(temp)); // isnan(Esse valor ai é is not a number), se for true não é número, falso é um número.


///////////////////////PARSEFLOAT///////////////////////
num1 = 0.7;
num2 = 0.1;

num1 = num1 + num2; //0.8
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1)); //Esse número é inteiro?
///////////////////////////////////////////////////


//////////OUTRA FORMA DE RESOLVER O PROBLEMA ANTERIOR/////////
num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1);
console.log(Number.isInteger(num1));
//////////////////////////////////////////////////////////////

