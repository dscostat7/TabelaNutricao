var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Peso Inválido!";
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Altura Inválida!"
    }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

titulo.addEventListener("click", mostraMensagem);
function mostraMensagem() {
    alert("Clicouu!!");
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(1);
}