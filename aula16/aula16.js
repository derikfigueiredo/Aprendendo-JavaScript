//Arrays podem ser entendidas como uma lista de coisas, JavaScript arrays are used to store multiple values in a single variable.
//Os arrays são indexidos por elementos, não por valor como as Strings


//            012345678910 //Os arrays são indexidos por elementos, não por valor como as Strings
const nome = 'Luiz Otávio';
console.log(nome[10]);
 
//                0        2       3    //Os arrays são indexados por elementos, não por valor como as Strings
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); //Mostrar o array todo
console.log(alunos[0]); //Mostrar apenas um


//////////////////////EDITAR O ARRAY/////////////////////////////

alunos[0] = 'Eduardo'; //Alterar o elemento 0.
alunos[3] = 'Luiza'; //Como não há outro elemento, esse será adicionado.

console.log(alunos.length); //Ver o tamanho do array

alunos[alunos.length] = 'Fábio'; //Adicionar um novo elemento.

alunos.push('Otávio'); // Adicionar um novo elemento no final. Forma mais recomendada

alunos.unshift('Marcos'); //Adicionar um novo elemento no começo.

//alunos.pop(); //Remover um elemento

let removido = alunos.pop(); //Salvando os elementos removidos da array em uma variável.
console.log(removido);

removido = alunos.shift() //removendo o primeiro elemento e salvando ele em uma variável.
console.log(removido)

console.log(alunos);

delete alunos[1]; //Deletar um elemento

console.log(alunos);
console.log(alunos[50]); //Encontrar um elemento

console.log(typeof alunos); //
console.log(alunos instanceof Array);
