
//funciones a ser llamadas en caso de ser elegidas
function multiplicacion(param1,param2){
  return param1 * param2;
}

function suma(param1,param2){
  return  param1 + param2;
}

function  resta(param1,param2){
  return  param1 - param2;
}

function division(param1,param2){
  return  param1 / param2;
}

//prompt pra elegir el tipo de operacion
var accion = prompt("ingrese que operacion desea realizar");

//cuando se elije determinada operacion, pasa tal cosa
while (accion != "salir") {
  var a = prompt("ingrese el 1er. operando");
  var b = prompt("ingrese el 2do. operando");

  a = parseInt(a);
  b = parseInt(b);

  var resultado = 0;

  switch (accion) {
    case "suma": resultado = suma(a,b);
                  break;
    case "resta":resultado = resta(a,b);
                  break;
    case "multiplicacion":resultado = multiplicacion(a,b);
                  break;
    case "division":  resultado = division(a,b);
                  break;
  }
  alert("El resultado es " + accion + " es: " + resultado);
  accion = prompt("Ingrese que operación desea realizar");

}
