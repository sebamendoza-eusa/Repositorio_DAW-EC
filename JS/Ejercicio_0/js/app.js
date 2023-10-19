var libro = {
  titulo: "Desarrollo Web con React",
  autor: "Carlos Azaustre",
  paginas: 64,
  formatos: ["PDF", "ePub", "Mobi"],
  precio: 17.99,
  publicado: false,

  leer: function () {
      let msg = `He leído  "${this.titulo}"`
      return msg;
  },
};


console.log(libro.paginas);

console.log(libro.leer());



const a = "Hey ";
function global() {
  var b = "¿Qué";
  function local() {
    var c = " Tal?";
    return a + b + c;
  }
  return local;
}

console.log(global())

let resultado1 = (x, y) => 3*x + y;
console.log(resultado1(3, 9));


let resultado2 = function suma(...sumandos) {

  let total = 0;
  let vector = [];

  for (let i in sumandos){

    vector.push(sumandos[i]);
    total = total + sumandos[i];
  }
  
  return total;
}

console.log(resultado2(3, 4, 5));


let resultado3 = (...sumandos) => {
  let total = 0;
  for (let i in sumandos) {
    total = total + sumandos[i]
  }
  return total;
}

console.log(resultado3(1, 2, 3))



class Car {

  constructor(marca, modelo, agno) {
    this.marca = marca;
    this.modelo = modelo;
    this.agno = agno;
  }

}

const coche1 = new Car('Ford', 'Orion', 1995);

console.log(coche1.color)

