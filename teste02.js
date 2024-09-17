// Usei o console do browser para testar o código (firefox)

function isInFibonnaci(numero) {
    let fibonacci   = 0,
        valorAtual  = 1,
        valorAnterior = 0;

    while(fibonacci <= numero) {        
        
        if (valorAtual == numero || valorAnterior == numero) {
            return true;
        }

        fibonacci = valorAtual + valorAnterior;
        valorAnterior = valorAtual;
        valorAtual = fibonacci;
    }    

    return false;
}


let numero = prompt("Digite um número: ");
let resposta = isInFibonnaci(numero);

console.log(
    resposta ? 
    alert(`O número ${numero} pertence a Fibonacci`) : 
    alert(`O número ${numero} não pertence a Fibonacci`)
);