
        /**************OBJETO MATH **********/


let num1 = 9.54578;
let num2 = Math.floor(num1); //Esse comando irá arredondar o valor para baixo.

console.log(num2);


let num3 = 9.54578;
let num4 = Math.ceil(num3); //Esse comando irá arredondar o valor para cima.

console.log(num4);


let num5 = 9.54578;
let num6 = Math.round(num5); //Esse comando irá arredondar para o valor mais próximo.

console.log(num6);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Mostrar o maior numero dessa sequência.
//console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // menor

console.log(Math.random()); //Gerar números aleatórios de 0 a 1.


const aleatorio = Math.random() * (10 - 5) + 5; //Gerar números aleatórios de 5 a 10.
console.log(aleatorio);


const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5) //Gerar números aleatorios arredondados
console.log(aleatorio2);


console.log(Math.PI);

console.log(Math.pow(2, 10)); //Potenciação
console.log(2 ** 10); //Potenciação


let num9 = 9;
console.log(num1 ** (1/2));  //Raiz quadrada

let num10 = 9;
console.log(num10 ** 0.5); //Raiz quadrada


console.log(100/0) //Mesmo que essa conta esteja errada, não iria gerar erro
console.log(!!(100/0)); //Verificar se essa conta vai dar true