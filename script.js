function calcularProrrateo() {
  const monto = parseFloat(document.getElementById("montoMensual").value);
  const dias = parseInt(document.getElementById("diasCobrar").value);

  if (isNaN(monto) || isNaN(dias)) {
    document.getElementById("totalPagar").textContent = "-";
    document.getElementById("diasCobrarSpan").textContent = "-";
    return;
  }

  const resultado = Math.floor((monto / 30) * dias);
  document.getElementById("totalPagar").textContent = resultado;
  document.getElementById("diasCobrarSpan").textContent = dias;
}

function calcularZona() {
  const monto = parseFloat(document.getElementById("montoZona").value);
  const inicio = new Date(document.getElementById("fechaInicio").value);
  const fin = new Date(document.getElementById("fechaPago").value);

  if (isNaN(monto) || isNaN(inicio.getTime()) || isNaN(fin.getTime())) {
    document.getElementById("totalPagarZona").textContent = "-";
    document.getElementById("diasZona").textContent = "-";
    return;
  }

  const diferenciaDias = Math.floor((fin - inicio) / (1000 * 60 * 60 * 24));
  const resultado = Math.floor((monto / 30) * diferenciaDias);

  document.getElementById("totalPagarZona").textContent = resultado;
  document.getElementById("diasZona").textContent = diferenciaDias;
}

function mostrarCalculadora(tipo) {
  document.getElementById("calculadoraProrrateo").classList.add("oculto");
  document.getElementById("calculadoraZona").classList.add("oculto");

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("activo"));

  if (tipo === "prorrateo") {
    document.getElementById("calculadoraProrrateo").classList.remove("oculto");
    tabs[1].classList.add("activo");
  } else {
    document.getElementById("calculadoraZona").classList.remove("oculto");
    tabs[0].classList.add("activo");
    actualizarFechaPago();
  }
}

function actualizarFechaPago() {
  const zona = parseInt(document.getElementById("zona").value);
  const hoy = new Date();
  const mesActual = hoy.getMonth();
  const añoActual = hoy.getFullYear();

  let fechaPago = new Date(añoActual, mesActual, zona);
  if (hoy.getDate() > zona) {
    fechaPago = new Date(añoActual, mesActual + 1, zona);
  }

  document.getElementById("fechaInicio").value = hoy.toISOString().split("T")[0];
  document.getElementById("fechaPago").value = fechaPago.toISOString().split("T")[0];
}
