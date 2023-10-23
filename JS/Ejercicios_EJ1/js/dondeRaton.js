function seleccionaDOM() {

    const div = document.getElementById("coordenadas");
    return div;
    
}

function main() {

    const div = seleccionaDOM()

    document.addEventListener("mousemove", (ev) => {

        xPos = ev.x;
        yPos = ev.y;

        div.innerHTML = `(${xPos}, ${yPos})`;

    })


}

main();



