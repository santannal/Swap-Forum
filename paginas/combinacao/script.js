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
    var entradan = document.getElementById('input').value;
    var entradak = document.getElementById('inputk').value;
    var isNumero = /^\d+$/.test(entradan);

    if (isNumero) {
        if (entradan >= entradak) {
            if (document.getElementById("radiocombinacao").checked) {
                var resultado = calcularPermutacao(entradan) / (calcularPermutacao(entradak) * (calcularPermutacao(entradan - entradak)));
                document.getElementById('resultado').innerHTML = 'Combinação simples: ' + resultado.toFixed(0);
            } else {
                var resultado = calcularPermutacao(entradan) / (calcularPermutacao(entradan - entradak));
                document.getElementById('resultado').innerHTML = 'Arranjo simples: ' + resultado.toFixed(0);
            }
        } else {
            document.getElementById('resultado').innerHTML = 'O k precisa ser menor que n';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Utilize a calculadora de permutação';
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