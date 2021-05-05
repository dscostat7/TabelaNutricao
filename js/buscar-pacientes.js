var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // transformando de JSON para JS

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });            
        } else {
            alert(xhr.status);
            alert(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    })
    xhr.send();
})