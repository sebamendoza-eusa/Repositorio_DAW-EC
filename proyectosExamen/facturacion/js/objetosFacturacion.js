// Inicialización de objeto literal

// const factura1 = {
//     numero: 201,
//     cliente: 'Transportes Veloz',
//     divisa: 'eur',
//     subtotal: 350.25,
//     IVA: 75.55,
// }


// // Métodos - Definición a posteriori

// factura1.total = function (descuento = 0) {
//     let totalFactura = (this.subtotal)*(1 - (descuento/100)) + this.IVA;
//     return totalFactura;
// }


// factura1.imprimeFactura = function () {
//     console.table(this);
// }

// // Objetos anidados

// factura1.detalle = {
//     1: "Producto 1",
//     2: "Producto 2",
//     3: "Producto 3",
// };

// Uso de función constructora



// Pseudo clase para el cliente

// function Cliente(_nombre, _direccion, _telefono, _nif) {

//     this.nombre = _nombre;
//     this.direccion = _direccion;
//     this.telefono = _telefono;
//     this.nif = _nif;

//     this.getDatosCliente = function () {

//         let respuesta = `Nombre: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, NIF: ${this.nif}`;
//         return respuesta
//     }
// }

// Manera alternativa de crear una pseudo-clase

function Cliente(_id, _nombre, _direccion, _telefono, _nif) {

    return {

        _id,
        _nombre,
        _direccion,
        _telefono,
        _nif,

        get DatosCliente() {
            // let respuesta = `Nombre: ${this._nombre}, Dirección: ${this._direccion}, Teléfono: ${this._telefono}, NIF: ${this._nif}`;
            //let respuesta = `id: ${this._id}`
            return `Nombre: ${this._nombre}, Dirección: ${this._direccion}, Teléfono: ${this._telefono}, NIF: ${this._nif}`;
        },

    }
}



// instanciación de un cliente

let cliente1 = new Cliente('1', 'Pepe', 'Avenida de los zurdos, 14', '612342787', '1829922323D');







// Pseudo clase para la empresa
function Empresa(nombre, direccion, telefono, cif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;
}

function Factura(cliente, ...elementos) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.base_imponible = 0;
    this.iva = 10;
    this.total = 0;
    this.forma_pago = 'contado';
}










// // Creo Instancias de ejemplos
// var cliente1 = new Cliente('Pepe', 'Avenida de los zurdos, 14', '612342787', '1829922323-D');

// var empresa1 = new Empresa('9 Mares', 'Calle de las sardinas', '612123123', '2342342545234524525');

// var factura1 = new Factura(cliente1, ['Chipirones en su tinta', 2, 5], ['Patas de Nécoras', 8, 30]);


// // Muestro Cliente 1
// document.write('<br /> CLIENTE 1: <br />');
// for (x in cliente1) {
//     document.write(cliente1[x] + '<br />');
// }


// // Muestro Empresa 1
// document.write('<br /> EMPRESA 1: <br />');
// for (x in empresa1) {
//     document.write(empresa1[x] + '<br />');
// }

// // Añado empresa a las facturas
// Factura.prototype.empresa = new Empresa();

// // Asigno una empresa concreta a una factura
// factura1.empresa = empresa1;

// // Añado a Factura para calcular total sin IVA
// Factura.prototype.totalsiniva = function () {
//     this.total = 0;
//     for (let x of this.elementos) {
//         // Calculo el precio de todos los elementos x cantidad
//         this.total += (x[2] * x[1]);
//     }
//     this.total += (this.total * this.base_imponible);
//     return this.total;
// };


// // Añado a Factura para calcular total con IVA
// Factura.prototype.totalconiva = function () {
//     var resultado = this.total + (this.totalsiniva() * 0.21);
//     return resultado;
// };


// // Muestro Factura 1
// document.write('<br />---------------------FACTURA 1--------------------- <br />');
// for (let x in factura1) {
//     // Si es un array muestro cada elemento
//     if (Array.isArray(factura1[x])) {
//         document.write('PRODUCTOS:<br />')
//         for (y of factura1[x]) {
//             document.write(y + '<br />');
//         }
//         // Si es un objeto tipo el atributo nombre
//     } else if (factura1[x] instanceof Cliente) {
//         document.write('Nombre del cliente→ ' + factura1[x].nombre + '<br /><br />');
//     } else if (factura1[x] instanceof Empresa) {
//         document.write('Nombre de la empresa → ' + factura1[x].nombre + '<br /><br />');
//         // Si no es una función lo muestro normal
//     } else if (typeof factura1[x] != 'function') {
//         document.write('<br />' + factura1[x] + '<br />');
//     }
// }
// document.write('<br /><br />Importe total es →' + factura1.totalsiniva() + '<br />');
// document.write('Importe total con IVA es →' + factura1.totalconiva() + '<br /><br />');














console.log("Sistema de facturación iniciado...");
console.log("Datos iniciales cargados...");