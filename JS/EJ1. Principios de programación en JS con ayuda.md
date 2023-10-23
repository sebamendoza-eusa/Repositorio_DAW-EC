# EJ1. Principios de programación en JS

# Ejercicios para practicar: Desarrollar los problemas propuestos

## Lectura de números

- Crea una página web que pida al usuario un número a partir de un cuadro de lectura
- Mediante un cuadro de mensaje indica al usuario si lo que escribió era un número o no

#### Pistas:

- Se puede usar el esquema básico de entrada-salida

```javascript
function recogeEntrada() {
    let msgEntrada = prompt("Escribe algo...");
    return msgEntrada
}

function main() {
    var msgEntrada = recogeEntrada();
    if (compruebaNumero(msgEntrada)) {
        var msgSalida = `Perfecto!!, has escrito el número ${msgEntrada}`;
    } else {
        var msgSalida = `Lo siento... ${msgEntrada} no es un número...`;
    }
    alert(msgSalida);
}
main();
```

- Haría falta definir una función `compruebaNumero()` que puede hacer uso de la función `isNan()` para la comprobación

----

## Fondo aleatorio

- Crea una página web que cambie aleatoriamente el color de fondo cada vez que entremos en ella o la recarguemos

#### Pistas:

Estamos en un ejercicio básico de manipulación del DOM

El esquema en este tipo de ejercicios es el siguiente:

```
// seleccionar los elementos del DOM que queremos manipular y meterlos en variables

// escribir las funciones que tienen que manipular las variables

// implementar los eventos necesarios para manipular las variables del DOM
```

En este caso concreto:

- Tenemos la escucha en el elemento `window` y la manipulación del atributo en el elemento `body`
- Hay que implementar una función que cambie el color de fondo. Lo mejor es buscar una que retorne la cadena `rgb(a,b,c)`, donde a, b, c son números aleatorios entre 0 y 255
- Usar `setAttribute([atributo], [valor])` para cambiar el color de fondo en el elemento deseado

---

## Cálculo de salario

- Crea una aplicación web que en obtenga del usuario los siguientes datos: nombre, apellidos, salario (con decimales), y la edad (número entero)
- Vamos a suponer que el usuario introduce bien los datos y no los vamos a validar
- La web ha de presentar esos datos en pantalla de forma clara
- A continuación presentaremos en pantalla una sección denominada ' Actualización salarial' en la que aparecerá un nuevo valor para el salario basado en las siguientes reglas:
  - Si el salario es mayor de 2000 no cambiará
  - Si el salario está entre 1000 y 2000 euros y la edad es mayor de 45, aumentar un 3%. Si a edad es menor o igual de 45 aumentar el salario un 10%
  - Si el salario es menor de 1000:  Si la persona es menor de 30 años el salario se aumentará a 1100 euros exactamente. Si la edad está entre 30 y 45 años subir el salario un 3% y a los mayores de 45 subirlo un 15%



#### Pistas:

- Usamos esquema básico de entrada-salida
- Podemos recoger tantas variables como queramos. Quedaran en memoria mientras no recarguemos la página
- Hay que definir una función `calculaSalario(salario, edad)`, que recoge dos parámetros y calcula el nuevo salario
- Usar if () { } else { }, tanto como sea necesario. Ayuda hacerse un diagrama de flujo si no lo ves claro

----

## Cálculo de la letra del DNI

- Crea una página web que recoja desde un formulario un número DNI y devuelva la letra del mismo. Si el DNI pasado tiene algún error devolverá un cuadro `Alert` avisando del hecho

#### Pistas:

- Lo primero es crear el formulario html. Basta con un título `h1`, un `label`y un `input type="text"`. Importante: Es una buena práctica usar el atributo `id` en los componentes del formulario.
- Creamos un div (con su id) debajo del formulario para poder colocar la salida del cálculo de la letra
- Como se van a recoger datos del formulario y procesar con JS usamos el esquema de manipulación del DOM que ya hemos visto. Hay que tener en cuenta qué elementos hemos de seleccionar (tanto para leer datos como para manipular)
- Habrá que definir una función `calculaLetra(dni)` que tome el parámetro `dni` y retorne la letra
- Atención al uso de `preventDefault()` para evitar que el formulario haga submit

## Cambio de color

- Realiza una página que muestre cinco cuadrados de diferentes colores. Cuando el ratón pase por encima de alguno de ellos el color de fondo será del color de relleno del cuadrado.

#### Pistas:

- Para dibujar cajas usaremos JS añadiendo elementos div
- Usaremos bootstrap 5 para facilitar el dibujo de las cajas. Añadir el enlace CDN para CSS

```css
<!-- Bootstrap CSS v5.2.1 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
```

- Para centrar las cajas usaremos este contenedor (incluir en el `body`)

```html
    <div class="m-0 vh-100 row justify-content-center align-items-center" id="divCajas">

    </div>
```

- Importante: la función que dibuja las cajas podría aceptar parámetros que identificara a cada una de ellas y aceptara un color
- La función addEventListener tiene que aplicarse a todas las cajas **al mismo tiempo**. Tendrá que capturar el color de fondo del elemento sobre el que pase el ratón y aplicará ese color al `body`

## ¿Dónde está el ratón?

- Realiza una página que capture las coordenadas de ratón y las muestre en la barra de estado.

#### Pistas:

- **Nota importante: La configuración de la barra de tareas en Google Chrome da problemas en algunas versiones. En vez de presentar la información en la barra de tareas presentarla en el centro de la ventana**
- Igual que en el ejercicio anterior usamos bootstrap
- Usar el siguiente código HTML:

```html
    <div id = "container" class="m-0 vh-100 row justify-content-center align-items-center">
        <div id="coordenadas" class="col-auto text-center p-5">

        </div>
    </div>
```

## Reloj

- Realiza una página que muestre la fecha y la hora actual en un reloj que se va actualizando.

#### Pistas:

- Al igual que en el ejercicio anterior usamos Bootstrap 5 y centramos la caja en el centro de la pantalla
- La idea es llamar a una función que actualice el contenido del div del html **cada segundo**. Para ello podemos usar `setInterval()`

## Validación formulario (1)

- Realiza una página que muestre un formulario y verifique la entrada de un número que esté comprendido entre 1..100

## Imagen cambiante

- Realiza una página que muestre una imagen que cambie cuando el ratón en pase por encima de la imagen y que vuelva a cambiar cuando salga de ella.

## Dado

- Hacer una página que simule el lanzamiento de un dado.

# Lectura y documentación de código

- A continuación se tiene un script que realiza cierta función. Intentar delimitar la función del script a partir de su lectura
- Testear el script y conseguir que se ejecute. NOTA IMPORTANTE: **Pueden existir errores que habrán de corregirse** para que el script se ejecute
- Necesitarás editar el documento HTML correspondiente
- Leer y documentar el código final usando los medios que veas oportunos. Prestar especial atención a la denominación de las variables para que el script sea más legible.
- opcionalmente pueden añadirse las mejoras que se vean oportunas para mejorar la usabilidad del script.

```javascript
main.js
----------------------------
let num, n;
let s = false;
let v;
do {
    ct = 0;
    num = parseint(Math.random() * 1000) + 1;
    do {
        do {
            v = false;
            n = prompt("¿Adivina el número");
            if (n == null) s = true;
            else if (isNaN(num) || n < 0 || n > 1000) {
                alert("No válido");
                v = true;
            }
        } while (s == false && v == true);

        ct++;

        if (s == false) {
            if (num > n) {
                alert("Mi numero es mayor");
            }
            else if(num < n) {
                alert("Mi numero es menor");
            }
        }
    } while (s == false && n != num);

    if (s == false) {
        alert("¡Acertaste! Intentos: " + ct);
    }
} while (s == false && confirm("¿jugar?"));

if (s) {
    document.write("<h1>Cancelado</h1>");
}
else {
    document.write("<h1>Fin</h1>");
}
```

