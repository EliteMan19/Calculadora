
function calcularProrrateo() {
    let monto = parseFloat(document.getElementById("monto").value);
    let dias = parseInt(document.getElementById("dias").value);
    if (!isNaN(monto) && !isNaN(dias)) {
        let resultado = Math.floor((monto / 30) * dias);
        document.getElementById("resultado").innerText = "Total a pagar: S/ " + resultado;
    } else {
        document.getElementById("resultado").innerText = "Por favor, completa todos los campos.";
    }
}

function mostrarZona() {
    document.getElementById("calc-principal").style.display = "none";
    document.getElementById("calc-zona").style.display = "block";
    document.getElementById("fechaInicio").valueAsDate = new Date();
    actualizarFechaPago();
}

function mostrarPrincipal() {
    document.getElementById("calc-zona").style.display = "none";
    document.getElementById("calc-principal").style.display = "block";
}

function actualizarFechaPago() {
    const zona = parseInt(document.getElementById("zona").value);
    const hoy = new Date();
    let fechaPago = new Date(hoy.getFullYear(), hoy.getMonth(), zona);
    if (fechaPago < hoy) {
        fechaPago.setMonth(hoy.getMonth() + 1);
    }
    document.getElementById("fechaPago").valueAsDate = fechaPago;
}

function calcularZona() {
    let monto = parseFloat(document.getElementById("montoZona").value);
    let fechaInicio = new Date(document.getElementById("fechaInicio").value);
    let fechaPago = new Date(document.getElementById("fechaPago").value);

    if (!isNaN(monto) && fechaInicio instanceof Date && fechaPago instanceof Date) {
        const diffTime = fechaPago.getTime() - fechaInicio.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const total = Math.floor((monto / 30) * diffDays);
        document.getElementById("resultadoZona").innerText = 
            `Días: ${diffDays} | Total a pagar: S/ ${total}`;
    } else {
        document.getElementById("resultadoZona").innerText = "Por favor, completa todos los campos.";
    }
}
