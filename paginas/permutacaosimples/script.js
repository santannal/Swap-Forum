function calcularPermutacao(n) {
    var fatorial = 1;
    for (var i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

document.getElementById('calcular').addEventListener('click', function () {
    var entrada = document.getElementById('input').value;

    //VERIFICA SE SÃO APENAS NUMEROS
    var isNumero = /^\d+$/.test(entrada);

    if (isNumero) {
        var resultado = calcularPermutacao(entrada);
        document.getElementById('resultado').innerHTML = 'Permutação: ' + resultado;
    } else {
        //DIVIDE EM MATRIZ E VERIFICA SE HÁ CARACTERES IGUAIS
        var letrasRepetidas = entrada.split('').some(function (letra, index) {
            return entrada.indexOf(letra) !== index;
        });

        if (letrasRepetidas) {
            document.getElementById('resultado').innerHTML = 'Atenção! A entrada possui letras repetidas. Utilize a calculadora de Permutação Composta.';
            return;
        }

        var resultado = calcularPermutacao(entrada.length);
        document.getElementById('resultado').innerHTML = 'Permutação: ' + resultado;
    }
});