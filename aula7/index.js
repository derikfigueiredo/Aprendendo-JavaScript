//Não podemos modificar o valor de uma constante como é feito na variável

/*
const nome = 'João'
console.log(nome); */

// String = Text | Number = Número 
/*
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
console.log(resultaDuplicado);

console.log(typeof(primeiroNumero + segundoNumero));


var nome = 'Luiz';
console.log(nome);

*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;

imc = peso /(alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc );
console.log(nome + ' nasceu em ' + anoNascimento + '.')
//Diferente da vírgula, todas essas strings estão unidas e são apenas uma
