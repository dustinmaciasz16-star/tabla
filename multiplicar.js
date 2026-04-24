document.getElementById("btn1").onclick = () => generarTabla();

function generarTabla(){
    let numero = document.getElementById("numero").value;
    let contenedor = document.getElementById("tabla");
    let mensaje = document.getElementById("mensaje");
    let contenido = "";

    if(numero === ""){
        mensaje.textContent = "⚠ Por favor, ingresa un número.";
        mensaje.className = "mensaje error";
        contenedor.innerHTML = "";
        return;
    }

    if(numero <= 0){
        mensaje.textContent = "⚠ Ingresa un número mayor que 0.";
        mensaje.className = "mensaje error";
        contenedor.innerHTML = "";
        return;
    }

    if(numero % 1 !== 0){
        mensaje.textContent = "⚠ Ingresa un número que no sea decimal.";
        mensaje.className = "mensaje error";
        contenedor.innerHTML = "";
        return;
    }

    if(numero >= 12){
        mensaje.textContent = "solo se puede hasta la tabla del 12";
        mensaje.className = "mensaje error";
        contenedor.innerHTML = "";
        return;
    }




    for(let i = 1; i <= 10; i++){
        contenido += "<div class='fila'>"+ numero +  "x" + i + "=" + (numero * i) + "</div>";
    }

    contenedor.innerHTML = contenido;

    mensaje.textContent = "✅ Mostrando la tabla del" + numero;
    mensaje.className = "mensaje ok";
}