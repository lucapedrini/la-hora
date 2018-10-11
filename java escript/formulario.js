documen.addeventlistener("DOMContentLoaded",function({
  var miform = document.getElementById("mi-formulario")

  miform.addeventlistener("submit",function(event){
    var camponombre = document.getElementById('nombre')
    var nombre = document.getElementById('nombre').value

    var camponombre = document.getElementById('apellido')
    var apellido = document.getElementById('apellido').value

    if(nombre === ""){
      camponombre.stylr.borderWidth = "1px";
      camponombre.style.borderColor = "red";
      camponombre.style.borderstyle = "solid";

      var alertanombre = document.getElementById('alert-nombre')
      alertanombre.style.displa = "inline";
      event.preventDefault();
    }else {
      camponombre.style.border = "none";

      var alertanombre = document.getElementById('alerta-nombre');
      alertanombre.style.display = "none";
    }
  });
}));
//display:none css
