/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project




let btn = document.querySelector("button");
btn.onclick = saludoPersonal;



function saludoPersonal() {

    let miNombre = prompt("Cuál es tu nombre??");

    const body = document.body;
    const saludo = document.createElement("h1");
    saludo.textContent = `Hola ${miNombre}, que tal estás?`;
    body.appendChild(saludo);    
}




// document.write(`Hola, ${miNombre}, ¿Qué tal estás?`)