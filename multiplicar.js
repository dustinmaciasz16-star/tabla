document.getElementById("btn1").onclick = () => generarTabla();

function generarTabla(){
    let numero = document.getElementById("numero").value;
    let contenedor = document.getElementById("tabla");
    let mensaje = document.getElementById("mensaje");

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

    let contenido = "";

    for(let i = 1; i <= 10; i++){
        contenido += `<div class="fila">${numero} x ${i} = ${numero * i}</div>`;
    }

    contenedor.innerHTML = contenido;

    mensaje.textContent = `✅ Mostrando la tabla del ${numero}`;
    mensaje.className = "mensaje ok";
}