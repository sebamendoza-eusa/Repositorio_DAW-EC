const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (ev) => {
  
  // output.textContent = `Presionaste "${ev.key}".`

  output.textContent += `${ev.key} - `

});