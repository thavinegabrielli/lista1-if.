/* 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno:
E-mail:
*/


const teclado = require(`prompt-sync`)();

let quantidade = parseFloat(teclado(`Digita quantidades de maçãs`));
let precoPadrao: number = 0;

if (quantidade < 12) {
  precoPadrao = 0.3;
} else {
  precoPadrao = 0.25;
}

let total = quantidade * precoPadrao;
console.log(` O Valor das maçãs foram ${total}`);