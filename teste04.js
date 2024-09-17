// Usei o console do browser para testar o código (firefox)

const faturamentoMes = [
    { "estado": "SP", "media": 67836.43 },
    { "estado": "RJ", "media": 36678.66 },
    { "estado": "MG", "media": 29229.88 },
    { "estado": "ES", "media": 27165.48 },
    { "estado": "Outros", "media": 19849.53}
];

const valorTotal = faturamentoMes.reduce((media, index) => {
    return media += index.media;
}, 0);


const participacaoEstado = faturamentoMes.map((index) => {
    let particiapacao = (index.media / valorTotal) * 100;

    return { 
        estado: index.estado, 
        particiapacao: particiapacao.toFixed(2) + "%" 
    }
});


for (let i = 0; i < participacaoEstado.length; i++) {
    console.log(`A participação do estado ${participacaoEstado[i].estado} é de ${participacaoEstado[i].particiapacao}`);
}