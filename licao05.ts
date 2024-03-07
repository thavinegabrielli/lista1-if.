const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat(teclado(`Digite o primeiro número: `));
let nDois: number = parseFloat(teclado(`Digite o segundo número: `));

if(nUm > nDois){
    console.log (`O número maior é ${nUm} e o menor é ${nDois}`)
}
    
else if(nDois > nUm){
    console.log (`O número maior é ${nDois} e o menor é ${nUm}`)
}

else if(nUm = nDois){
    console.log (`Os números ${nUm} e ${nDois} são iguais`)
}

else{
    console.log(`algo deu errado!`)
}