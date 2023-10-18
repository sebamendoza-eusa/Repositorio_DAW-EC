
//Todo el código le colocamos de forma que tengamos //asegurada toda la carga del DOM

window.addEventListener("load",function(ev){

  //asignación de elementos
  const imagen = document.getElementById("imagen");
  const combo = document.getElementById("tipo");
  const serie = document.getElementById("serie");
  const labelSerie = document.getElementById("labelSerie");
  const labelDescripcion = document.getElementById("labelDescripcion");
  const enviar = document.getElementById("enviar");
  const mostrarDescripcion = document.getElementById("mostrarDescripcion");
  const capaError = document.getElementById("capaError");
  const fDescripcion = document.getElementById("fDescripcion");

  //Cuadro combinado que cambia la imagen
  // combo.addEventListener ("change", function(ev) {
  //   imagen.setAttribute("src",`assets/${combo.value}.jpg`);
  //   labelSerie.removeAttribute("class");
  //   serie.removeAttribute("class");
  // });

  //Si se coloca el foco en el número de serie
  //quitamos los errores
  
  serie.addEventListener("focus", function (ev) {
    capaError.textContent="";
    labelSerie.classList.remove("error");
    serie.classList.remove("error");
  });

  //Validación del número de serie al intentar enviar los datos
  
  enviar.addEventListener("click", function(ev){
    if(/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value)==false){
      ev.preventDefault();
      capaError.textContent="Código no válido";
      labelSerie.classList.add("error");
      serie.classList.add("error")
    }
  });

  //Click en el botón de descripción, muestra una capa //con el área de texto y la etiqueta

  mostrarDescripcion.addEventListener("click", function(ev){
    fDescripcion.className="w3-show w3-text"
    this.className="w3-hide"
  });

});