function calcularProrrateo() {
    let monto = document.getElementById("monto").value;
    let dias = document.getElementById("dias").value;
    let resultadoSpan = document.getElementById("resultado");

    if (monto > 0 && dias > 0) {
        let prorrateo = (monto / 30) * dias;
        let resultado = Math.floor(prorrateo); // Redondea hacia abajo siempre
        resultadoSpan.textContent = "S/ " + resultado;

        // Animación de resultado
        resultadoSpan.style.opacity = "0";
        setTimeout(() => {
            resultadoSpan.style.opacity = "1";
            resultadoSpan.style.transform = "scale(1.1)";
            setTimeout(() => resultadoSpan.style.transform = "scale(1)", 200);
        }, 100);
    } else {
        resultadoSpan.textContent = "S/ -";
    }
}
