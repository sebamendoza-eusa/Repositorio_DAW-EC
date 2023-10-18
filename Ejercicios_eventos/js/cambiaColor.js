const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


// Manera aconsejable de manejar eventos

// btn.addEventListener("click", (ev) => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

//   // console.log(ev)

//   document.body.style.backgroundColor = rndCol;
// });


// Función que controla el handler entero (mejor todavía)

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  
  document.body.style.backgroundColor = rndCol;



}

btn.addEventListener("click", bgChange);


// Forma no aconsejable de manejar eventos

// btn.onclick = () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// };



// Ensayar con otros eventos --> focus, blur, dblclick, mouseover, mouseout


// Objeto evento

function bgChange(ev) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  ev.target.style.backgroundColor = rndCol;

  console.log(ev);


}

btn.addEventListener("click", bgChange);