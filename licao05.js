var teclado = require("prompt-sync")();
var nUm = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var nDois = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
if (nUm > nDois) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(nUm, " e o menor \u00E9 ").concat(nDois));
}
else if (nDois > nUm) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(nDois, " e o menor \u00E9 ").concat(nUm));
}
else if (nUm = nDois) {
    console.log("Os n\u00FAmeros ".concat(nUm, " e ").concat(nDois, " s\u00E3o iguais"));
}
else {
    console.log("algo deu errado!");
}
