alert('CUIDADO! Não confie 100%, sempre verifique no sistema da Macavi!')

// Valor do juros de cada parcela do cartão
let fatorCartao = [
    1.0293, //1
    0.5221, //2
    0.3531, //3
    0.2686, //4
    0.2179, //5
    0.1842, //6
    0.1601, //7
    0.1420, //8
    0.1280, //9
    0.1168, //10
    0.1077, //11
    0.1000  //12
]

// Valor do juros de cada parcela do carnê
let fatorCarne = [
    1.0484, //1
    0.5366, //2
    0.3661, //3
    0.2810, //4
    0.2300, //5
    0.1960, //6
    0.1718, //7
    0.1537, //8
    0.1397, //9
    0.1285, //10
    0.1194, //11
    0.1118, //12
    0.1054, //13
    0.1000  //14
]

// Mostra o parcelamento na tela ao clicar no botão "Calcular"
function calculoFator(){
    // Retorna o valor digitado para ser calculado
    let valor = Number(document.getElementById('valor').value)
    let valorGarantia = Number(document.getElementById('valorGarantia').value)

    let valorTac
    let valorCurso
    let valorTaxaEntrega

    // Retorna o valor do TAC
    if(document.querySelector('input#tacSim').checked){
        valorTac = 38
    } else {
        valorTac = 0
    }

    if(document.querySelector('input#pass0').checked){
        valorCurso = 0
    } else if (document.querySelector('input#pass1').checked){
        valorCurso = 90
    } else if (document.querySelector('input#pass2').checked){
        valorCurso = 120
    } else if (document.querySelector('input#pass3').checked){
        valorCurso = 297
    }

    if(document.querySelector('input#semTaxa').checked){
        valorTaxaEntrega = 0
    } else if(document.querySelector('input#entregaSobral').checked){
        valorTaxaEntrega = 50
    } else if(document.querySelector('input#entregaOutrasCidades').checked){
        valorTaxaEntrega = 150
    }

    valor = valor + valorTac + valorCurso + valorTaxaEntrega
    valor = valor + valorGarantia


    // Retorna a section referente aos resultados do cartão
    let resultadoCartao = document.querySelector('section div#resultado-cartao')
    resultadoCartao.innerHTML = '<h2>Valor de parcelas do Cartão</h2>'


    // Retorna a section referente aos resultados do carnê
    let resultadoCarne = document.querySelector('section div#resultado-carne')
    resultadoCarne.innerHTML = '<h2>Valor de parcelas do Carnê</h2>'


    // Verifica se o campo está vazio
    if(valor == ''){
        resultadoCartao.innerHTML = `<h2>Nenhum valor foi digitado!</h2>`
        resultadoCarne.innerHTML = ''
    } else {
            for(let i = 0; i <= fatorCartao.length - 1; i++){
            let valorParcelado = valor * fatorCartao[i]
            let valorComJuros = valorParcelado * (i+1)
            resultadoCartao.innerHTML += `<p>${i+1} x ${valorParcelado.toFixed(2)} = ${valorComJuros.toFixed(2)}</p>`
        }
        for(let i = 0; i <= fatorCarne.length - 1; i++){
            let valorParcelado = valor * fatorCarne[i]
            let valorComJuros = valorParcelado * (i+1)
            resultadoCarne.innerHTML += `<p>${i+1} x ${valorParcelado.toFixed(2)} = ${valorComJuros.toFixed(2)}</p>`
        }
    }
}