function dibujaCaja(color, idNombre) {

    const divCajas = document.getElementById("divCajas");
    let divCaja = document.createElement("div");
    divCaja.setAttribute("id", idNombre);
    divCaja.setAttribute("style", `background-color: #${color}`);

    
    divCaja.setAttribute("class", "col-sm-2 border text-center text-light p-5");
    divCaja.innerHTML = `#${color}`

    divCajas.appendChild(divCaja);
    
}


function main() {


    let datosCajas = [["534563", "caja"], ["fa4565", "caja"], ["126545", "caja"], ["654512", "caja"], ["003400", "caja"]];

    datosCajas.forEach((item) => {
        dibujaCaja(item[0], item[1]);
    });
    

    [...document.querySelectorAll("#caja")].forEach(function (element) {

            element.addEventListener("mouseover", ev => {

                bgcolorString = element.getAttribute("style");

                document.body.setAttribute("style", bgcolorString);

            });
            
        });



}

main();



