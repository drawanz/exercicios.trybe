let urgente = document.querySelectorAll(".emergency-tasks div h3");
urgente[0].style.backgroundColor = "purple";
urgente[1].style.backgroundColor = "purple";

let naoUrgente = document.querySelectorAll(".no-emergency-tasks div h3");
naoUrgente[0].style.backgroundColor = "black";
naoUrgente[1].style.backgroundColor = "black";

let corEsquerda = document.getElementsByClassName("emergency-tasks")
corEsquerda[0].style.backgroundColor = "orange";
let corDreita = document.getElementsByClassName("no-emergency-tasks")
corDreita[0].style.backgroundColor = "yellow";

let header = document.getElementById("header-container");
header.style.backgroundColor = "green";
