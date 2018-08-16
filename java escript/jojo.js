var numeroAleatorio = Math.ceil(Math.random() * 10);
var oportunidades = 3;

while (oportunidades > 0) {
  alert("Ingrese un número, sus oportunudades son: " + oportunidades);
  var num = parseInt(prompt(""));
  if (num == numeroAleatorio) {
    alert("Ganaste!!! El número es: " + num);
    oportunidades = 0;
  }
  oportunidades --;
  if (oportunidades == 0) {
    alert("Perdiste. JAJAJAJAJAJA, Bronce")
  }
}
