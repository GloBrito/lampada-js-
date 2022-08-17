const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken() {
  //Função que paraliza os botões depois que a lâmpada estiver quebrada
  return lamp.src.indexOf("quebrada") > -1; //Método vai procurar no source se tem a palavra "quebrada" e retorna um número maior que 1, caso verdadeiro.
}

function lampOn() {
  //FUNÇÃO QUE MOSTRA A LÂMPADA LIGADA
  if (turnOff.disabled && turnOn.disabled) {
    lamp.src = "./img/quebrada.jpg";
    return;
  }
  if (!isLampBroken()) {
    //Se a lâmpada não estiver quebrada (!) troca para ligada
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    // Se a lâmpada estiver quebrada muda para deligada
    lamp.src = "./img/desligada.jpg";
  }
}

function lampOff() {
  if (turnOff.disabled && turnOn.disabled) {
    lamp.src = "./img/quebrada.jpg";
    return;
  }
  //FUNÇÃO QUE MOSTRA A LÂMPADA DESLIGADA
  lamp.src = "./img/desligada.jpg";
}

function lampBroken() {
  //Função que mostra a lâmapda quebrada após os dois cliques.

  turnOff.disabled = true;
  turnOn.disabled = true;
}
// As funções foram criadas fora da chamada do evento para serem reaproveitadas.

turnOn.addEventListener("click", lampOn); // EVENTO QUE LIGA A LÂMPADA APÓS O CLICK
turnOff.addEventListener("click", lampOff); //EVENTO QUE DESLIGA A LÂMPADA APÓS O CLICK
lamp.addEventListener("mouseover", lampOn); //Lâmpada liga quando o mouse passa por cima.
lamp.addEventListener("mouseleave", lampOff); // Lâmpada apaga quando o mousse sai de cima da img.
lamp.addEventListener("dblclick", lampBroken); //Lâmpada quebra com o duplo click;
