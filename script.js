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

function calculoFator(){
    let valor = document.getElementById('valor').value
    let resultadoCartao = document.querySelector('section div#resultado-cartao')
    resultadoCartao.innerHTML = 'Valor de parcelas do Cartão'

    for(let i = 0; i <= fatorCartao.length - 1; i++){
        let valorParcelado = valor * fatorCartao[i]
        let valorComJuros = valorParcelado * (i+1)
        // console.log(`${i+1}x${valorParcelado.toFixed(2)} = ${valorComJuros.toFixed(2)}`)
        resultadoCartao.innerHTML += `<p>${i+1}x${valorParcelado.toFixed(2)} = ${valorComJuros.toFixed(2)}</p>`
    }

    let resultadoCarne = document.querySelector('section div#resultado-carne')
    resultadoCarne.innerHTML = 'Valor de parcelas do Carnê'
    for(let i = 0; i <= fatorCarne.length - 1; i++){
        let valorParcelado = valor * fatorCarne[i]
        let valorComJuros = valorParcelado * (i+1)
        resultadoCarne.innerHTML += `<p>${i+1}x${valorParcelado.toFixed(2)} = ${valorComJuros.toFixed(2)}</p>`
    }
}