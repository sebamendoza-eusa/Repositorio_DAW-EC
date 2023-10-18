const container = document.querySelector("#container");
const button = document.querySelector("button");
const output = document.querySelector("#output");



function handleClick(ev) {
  output.textContent += `Hiciste clic en un elemento ${ev.currentTarget.tagName}\n`;
}

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);