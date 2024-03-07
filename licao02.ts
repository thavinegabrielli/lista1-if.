/*2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
nome: Thávine 
*/

let teclado = require (`prompt-sync`)();
let x : number = parseFloat (`teclado(digite o valor de x:)`);
let y : number = parseFloat (`teclado(digite o valor de x)`);
let z : number = 0;
console.log(`o valor de x é${x} e o valor de y é ${z}`);

z = x;
x = y;
y = z;

console.log(`o valor de x é ${x} e o valor de y é ${z}`);