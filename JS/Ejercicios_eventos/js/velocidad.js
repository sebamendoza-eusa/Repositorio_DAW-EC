const VMAX = 120;
const VMIN = 0;

let velocidad = document.querySelector("span");

document.body.addEventListener("keydown", (ev) => {

  let v = Number(velocidad.textContent);

  if (ev.key=="ArrowUp") {
    if (v<VMAX) {
      velocidad.textContent = v + 1;
    }
  }

  if (ev.key=="ArrowDown") {
    if (v>VMIN) {
      velocidad.textContent = v - 1;
    }
  }

});

// probar con otros eventos de teclado