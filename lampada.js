const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
  //FUNÇÃO QUE MOSTRA A LÂMPADA LIGADA
  lamp.src = "./img/ligada.jpg";
}

function lampOff() {
  //FUNÇÃO QUE MOSTRA A LÂMPADA DESLIGADA
  lamp.src = "./img/desligada.jpg";
}

turnOn.addEventListener("click", lampOn); // EVENTO QUE LIGA A LÂMPADA APÓS O CLICK
turnOff.addEventListener("click", lampOff); //EVENTO QUE DESLIGA A LÂMPADA APÓS O CLICK
