// Usei o console do browser para testar o código (firefox)


// ### lista gerada no chatGPT
//
// input: Gere uma lista json nesse formato: 
//  data(ano/mês/dia), 
//  faturamento(float),
//  gasto(float), 
//  trabalhado(bool)

const faturamentoMes = [
    { "data": "2024/09/01", "faturamento": 0.00, "gasto": 2000.50, "trabalhado": false },
    { "data": "2024/09/02", "faturamento": 10500.50, "gasto": 3200.30, "trabalhado": true },
    { "data": "2024/09/03", "faturamento": 9800.75, "gasto": 2800.60, "trabalhado": true },
    { "data": "2024/09/04", "faturamento": 11200.00, "gasto": 3500.45, "trabalhado": true },
    { "data": "2024/09/05", "faturamento": 12350.90, "gasto": 3100.75, "trabalhado": true },
    { "data": "2024/09/06", "faturamento": 10780.30, "gasto": 2900.50, "trabalhado": true },
    { "data": "2024/09/07", "faturamento": 0.00, "gasto": 1500.00, "trabalhado": false },
    { "data": "2024/09/08", "faturamento": 0.00, "gasto": 1800.50, "trabalhado": false },
    { "data": "2024/09/09", "faturamento": 12560.45, "gasto": 3400.85, "trabalhado": true },
    { "data": "2024/09/10", "faturamento": 13120.85, "gasto": 3600.60, "trabalhado": true },
    { "data": "2024/09/11", "faturamento": 11350.70, "gasto": 3000.40, "trabalhado": true },
    { "data": "2024/09/12", "faturamento": 12450.60, "gasto": 3300.25, "trabalhado": true },
    { "data": "2024/09/13", "faturamento": 13760.10, "gasto": 3700.75, "trabalhado": true },
    { "data": "2024/09/14", "faturamento": 0.00, "gasto": 2000.00, "trabalhado": false },
    { "data": "2024/09/15", "faturamento": 0.00, "gasto": 2200.50, "trabalhado": false },
    { "data": "2024/09/16", "faturamento": 10950.45, "gasto": 2900.35, "trabalhado": true },
    { "data": "2024/09/17", "faturamento": 11650.20, "gasto": 3100.50, "trabalhado": true },
    { "data": "2024/09/18", "faturamento": 11800.35, "gasto": 3150.65, "trabalhado": true },
    { "data": "2024/09/19", "faturamento": 12790.55, "gasto": 3400.75, "trabalhado": true },
    { "data": "2024/09/20", "faturamento": 11000.75, "gasto": 2900.90, "trabalhado": true },
    { "data": "2024/09/21", "faturamento": 0.00, "gasto": 1800.00, "trabalhado": false },
    { "data": "2024/09/22", "faturamento": 0.00, "gasto": 1900.50, "trabalhado": false },
    { "data": "2024/09/23", "faturamento": 13670.80, "gasto": 3650.40, "trabalhado": true },
    { "data": "2024/09/24", "faturamento": 12320.50, "gasto": 3350.25, "trabalhado": true },
    { "data": "2024/09/25", "faturamento": 11450.60, "gasto": 3050.10, "trabalhado": true },
    { "data": "2024/09/26", "faturamento": 11980.40, "gasto": 3200.80, "trabalhado": true },
    { "data": "2024/09/27", "faturamento": 12890.20, "gasto": 3450.50, "trabalhado": true },
    { "data": "2024/09/28", "faturamento": 0.00, "gasto": 1750.00, "trabalhado": false },
    { "data": "2024/09/29", "faturamento": 0.00, "gasto": 1900.75, "trabalhado": false },
    { "data": "2024/09/30", "faturamento": 13720.15, "gasto": 3700.90, "trabalhado": true }
];


const diasTrabalhados = faturamentoMes.filter((index) => {
    return index.trabalhado;
});


const menorFaturamento = diasTrabalhados.reduce((menor, index) => {
    return index.faturamento < menor ? index.faturamento : menor;
}, diasTrabalhados[0].faturamento);


const maiorFaturamento = diasTrabalhados.reduce((maior, index) => {
    return index.faturamento > maior ? index.faturamento : maior;
}, diasTrabalhados[0].faturamento);



let mediaFaturamento = diasTrabalhados.reduce((media, index) => {
    return media += index.faturamento;
}, 0);


mediaFaturamento = (mediaFaturamento / diasTrabalhados.length).toFixed(2);


const acimaDaMedia = diasTrabalhados.filter((index) => {
    return index.faturamento > mediaFaturamento;
});


console.log(`Faturamento do mês \nMenor: R$ ${menorFaturamento}\nMaior: R$ ${maiorFaturamento}\nMedia: R$ ${mediaFaturamento}`);
console.log("Faturamentos acima da média: ");

acimaDaMedia.forEach((index) => {
    console.log(`Dia: ${index.data.slice(-2)} - Faturamento: ${index.faturamento}`);
});
