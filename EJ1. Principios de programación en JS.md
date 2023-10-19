# EJ1. Principios de programación en JS

# Ejercicios para practicar: Desarrollar los problemas propuestos

## Lectura de números

- Crea una página web que pida al usuario un número a partir de un cuadro de lectura
- Mediante un cuadro de mensaje indica al usuario si lo que escribió era un número o no

## Fondo aleatorio

- Crea una página web que cambie aleatoriamente el color de fondo cada vez que entremos en ella o la recarguemos

## Cálculo de salario

- Crea una aplicación web que en obtenga del usuario los siguientes datos: nombre, apellidos, salario (con decimales), y la edad (número entero)
- Vamos a suponer que el usuario introduce bien los datos y no los vamos a validar
- La web ha de presentar esos datos en pantalla de forma clara
- A continuación presentaremos en pantalla una sección denominada ' Actualización salarial' en la que aparecerá un nuevo valor para el salario basado en las siguientes reglas:
  - Si el salario es mayor de 2000 no cambiará
  - Si el salario está entre 1000 y 2000 euros y la edad es mayor de 45, aumentar un 3%. Si a edad es menor o igual de 45 aumentar el salario un 10%
  - Si el salario es menor de 1000:  Si la persona es menor de 30 años el salario se aumentará a 1100 euros exactamente. Si la edad está entre 30 y 45 años subir el salario un 3% y a los mayores de 45 subirlo un 15%

## Cálculo de la letra del DNI

- Crea una página web que recoja desde un formulario un número DNI y devuelva la letra del mismo. Si el DNI pasado tiene algún error devolverá un cuadro `Alert` avisando del hecho

## Cambio de color

- Realiza una página que muestre cinco cuadrados de diferentes colores. Cuando el ratón pase por encima de alguno de ellos el color de fondo será del color de relleno del cuadrado.

## ¿Dónde está el ratón?

- Realiza una página que capture las coordenadas de ratón y las muestre en la barra de estado.

## Reloj

- Realiza una página que muestre la fecha y la hora actual en un reloj que se va actualizando.

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

