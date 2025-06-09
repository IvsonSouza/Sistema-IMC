const formulario = document.getElementById("formulario-imc");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const resultadoIMC = document.getElementById("resultado-imc");
const classificacaoIMC = document.getElementById("classificacao-imc");
const resultadoContainer = document.getElementById("resultado-container");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let imc = calcularIMC();

    if (imc) {
        let classificacao = classificarIMC(imc);
        resultadoIMC.textContent = imc;
        classificacaoIMC.textContent = classificacao;
        resultadoContainer.classList.remove("escondido");
    }
    
});

function calcularIMC() {
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const pesoNaoEhUmNumero = isNaN(peso) || peso <= 0;
    const alturaNaoEhUmNumero = isNaN(altura) || altura <= 0;

    if (pesoNaoEhUmNumero === true || alturaNaoEhUmNumero === true) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const alturaEmMetros = altura / 100;
    const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
    return Number(resultadoIMC.toFixed(2));
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau II";
    }
    return "Obesidade grau III";
}
