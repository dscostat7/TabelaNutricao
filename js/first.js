var paciente1 = document.querySelector("#paciente1"); // pegando os dados do paciente 1;
var tdPeso1 = paciente1.querySelector(".info-peso"); // buscando apenas o conteúdo da coluna peso do paciente 1;
var peso1 = tdPeso1;
var tdAtura1 = paciente1.querySelector(".info-altura"); // buscando apenas o conteúdo da coluna altura do paciente 1;
var tdImc1 = document.querySelector("#imcP1"); // buscando apenas o conteúdo da coluna IMC do paciente 1;
var imcp1 = (peso1.textContent / (tdAtura1.textContent * tdAtura1.textContent)); // realizando calculo IMC do paciente 1;


tdImc1.textContent = imcp1.toFixed(1); // Alterando a coluna IMC e setando apenas 2 números após a virgula;


var paciente2 = document.querySelector("#paciente2"); // pegando os dados do paciente 2;
var tdPeso2 = paciente2.querySelector(".info-peso"); // buscando apenas o conteúdo da coluna peso do paciente 2;
var tdAtura2 = paciente2.querySelector(".info-altura"); // buscando apenas o conteúdo da coluna altura do paciente 2;
var tdImc2 = document.querySelector("#imcP2"); // buscando apenas o conteúdo da coluna IMC do paciente 2;
var imcp2 = (tdPeso2.textContent / (tdAtura2.textContent * tdAtura2.textContent)); // realizando calculo IMC do paciente 2;

tdImc2.textContent = imcp2.toFixed(1); // Alterando a coluna IMC e setando apenas 2 números após a virgula;


var paciente3 = document.querySelector("#paciente3"); // pegando os dados do paciente 3;
var tdPeso3 = paciente3.querySelector(".info-peso"); // buscando apenas o conteúdo da coluna peso do paciente 3;
var tdAtura3 = paciente3.querySelector(".info-altura"); // buscando apenas o conteúdo da coluna altura do paciente 3;
var tdImc3 = document.querySelector("#imcP3"); // buscando apenas o conteúdo da coluna IMC do paciente 3;
var imcp3 = (tdPeso3.textContent / (tdAtura3.textContent * tdAtura3.textContent)); // realizando calculo IMC do paciente 3;

tdImc3.textContent = imcp3.toFixed(1); // Alterando a coluna IMC e setando apenas 2 números após a virgula;


var paciente4 = document.querySelector("#paciente4"); // pegando os dados do paciente 4;
var tdPeso4 = paciente4.querySelector(".info-peso"); // buscando apenas o conteúdo da coluna peso do paciente 4;
var tdAtura4 = paciente4.querySelector(".info-altura"); // buscando apenas o conteúdo da coluna altura do paciente 4;
var tdImc4 = document.querySelector("#imcP4"); // buscando apenas o conteúdo da coluna IMC do paciente 4;
var imcp4 = (tdPeso4.textContent / (tdAtura4.textContent * tdAtura4.textContent)); // realizando calculo IMC do paciente 4;

tdImc4.textContent = imcp4.toFixed(1); // Alterando a coluna IMC e setando apenas 2 números após a virgula;


var paciente5 = document.querySelector("#paciente5"); // pegando os dados do paciente 5;
var tdPeso5 = paciente5.querySelector(".info-peso"); // buscando apenas o conteúdo da coluna peso do paciente 5;
var tdAtura5 = paciente5.querySelector(".info-altura"); // buscando apenas o conteúdo da coluna altura do paciente 5;
var tdImc5 = document.querySelector("#imcP5"); // buscando apenas o conteúdo da coluna IMC do paciente 5;
var imcp5 = (tdPeso5.textContent / (tdAtura5.textContent * tdAtura5.textContent)); // realizando calculo IMC do paciente 5;

tdImc5.textContent = imcp5.toFixed(1); // Alterando a coluna IMC e setando apenas 2 números após a virgula;

if (peso1 < 0 || peso1 > 200) {
    alert("Peso inválido!");
}