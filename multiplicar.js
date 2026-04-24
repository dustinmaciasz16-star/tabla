document.getElementById("btn1"),onclick = () => generarTabla();

function generarTabla(){
    let contenedor = document.getElementById("tabla");
    let contenido = "";
    for(let i = 1; i <= 10; i++){
        contenido += "<div class='fila'>3 x "+ i + " = " + (3 * i) +"</div>";
    }
    contenedor.innerHTML = contenido;

}