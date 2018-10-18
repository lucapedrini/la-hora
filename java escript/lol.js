document.addEventListener("DOMContentLoaded", function(){
var person = [
  {nombre: "luca", apellido: "pedrini "},

];

var cuerpotabla = document.getElementById("cuerpotabla");

for (var i = 0; i <= person.length; i++) {
  cuerpotabla.innerHTML = cuerpotabla.innerHTML + "<tr><td>" + person[i].nombre + "</td><td>" + person[i].apellido + "</td></tr>";
}

});
