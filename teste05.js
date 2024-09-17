// Usei o console do browser para testar o código (firefox)

function inverterArr(str) {
    let strInvertida = [];

    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
        
    }

    return strInvertida;
}

let str = prompt("Digite algo: ");
console.log(inverterArr(str));