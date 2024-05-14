function calcularPermutacao(numero) {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function calcularPermutacaoComRepeticao(entrada) {
    var entradaArray = entrada.split('');

    var contagemCaracteres = {};
    entradaArray.forEach(function (caractere) {
        if (contagemCaracteres[caractere]) {
            contagemCaracteres[caractere]++;
        } else {
            contagemCaracteres[caractere] = 1;
        }
    });

    var fatorialEntrada = calcularFatorial(entradaArray.length);

    var fatoriaisContagem = 1;
    for (var caractere in contagemCaracteres) {
        fatoriaisContagem *= calcularFatorial(contagemCaracteres[caractere]);
    }

    return fatorialEntrada / fatoriaisContagem;
}

document.getElementById('calcular').addEventListener('click', function () {
    var entrada = document.getElementById('input').value;
    var isNumero = /^\d+$/.test(entrada);

    if (isNumero) {
        var resultado = calcularPermutacao(entrada);
        document.getElementById('resultado').innerHTML = 'Permutação com repetição: ' + resultado;
    } else {
        // Calcula a permutação com repetição
        var resultado = calcularPermutacaoComRepeticao(entrada);
        document.getElementById('resultado').innerHTML = 'Permutação com repetição: ' + resultado;
    }
});

/*
document.getElementById('btnmore').addEventListener('click', function () {
    const elementoPai = document.getElementById('novoitem');

    const novoInput = document.createElement("input");
    novoInput.className = 'form-control form-control-lg mb-2';
    novoInput.placeholder = "Insira a repetição...";
    novoInput.type = "number";
    novoInput.id = "novoInput";

    elementoPai.appendChild(novoInput);
})

document.getElementById('btnmenos').addEventListener('click', function () {

    const elementoPai = document.getElementById('novoitem');
    const inputs = elementoPai.querySelectorAll('input');
    const ultimoInput = inputs[inputs.length - 1];
    elementoPai.removeChild(ultimoInput);
})
*/