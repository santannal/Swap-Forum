function calcularPermutacao(numero) {
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

document.getElementById('calcular').addEventListener('click', function () {
    var entradan = parseInt(document.getElementById('input').value);
    var entradak = parseInt(document.getElementById('inputvaluek').value);
    var isNumero = /^\d+$/.test(entradan) && /^\d+$/.test(entradak);

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
            document.getElementById('resultado').innerHTML = 'O VALOR DE K PRECISA SER MENOR OU IGUAL AO VALOR DE N';
        }
    } else {
        document.getElementById('resultado').innerHTML = 'Utilize a calculadora de permutação';
    }
});
