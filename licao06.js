/*6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a menor nota e 10 a maior,
 e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeira nota: "));
var n2 = parseFloat(teclado("Digite a segunda nota: "));
var media = (n1 + n2) / 2;
if (media >= 8.5 && media <= 10) {
    console.log("A m\u00E9dia ".concat(media, " tem nota \"A\""));
}
else if (media >= 7 && media < 8.5) {
    console.log("A m\u00E9dia ".concat(media, " tem nota \"B\""));
}
else if (media >= 5 && media < 7) {
    console.log("A m\u00E9dia ".concat(media, " tem nota \"C\""));
}
else if (media >= 3 && media < 5) {
    console.log("A m\u00E9dia ".concat(media, " tem nota \"D\""));
}
else if (media > 3) {
    console.log("A m\u00E9dia ".concat(media, " tem nota \"E\""));
}
