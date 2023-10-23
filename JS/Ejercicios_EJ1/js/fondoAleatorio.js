function seleccionaDOM() {

    const body = document.body;

    return body;

}


function cambiaColorFondo() {

    bgColorString = `rgb(${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)}, ${parseInt(Math.random()*255)})`
    return bgColorString;
    
}



function main() {


    body = seleccionaDOM();


    window.addEventListener("load", (ev) => {


        bgColorString = cambiaColorFondo();
        propElement = `background-color: ${bgColorString};`

        

        body.setAttribute("style", propElement)
    });



}

main();



