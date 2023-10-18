const form = document.querySelector("form");
const fname = document.getElementById("nombre");
const lname = document.getElementById("apellido");
const para = document.querySelector("p");

form.addEventListener("submit", (ev) => {
  
  if (nombre.value === "" || apellido.value === "") {
    
    
    
    para.textContent = "¡Necesitas completar ambos campos!";}

  else {

    form.reset();
    para.textContent = "¡Enviado!";
    
  }

  ev.preventDefault();
  
});