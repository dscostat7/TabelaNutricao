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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(1);
    }
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    alert("Clicouu!!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Clicado!");
})