  function calcularNotaFinal() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores numéricos válidos en todas las notas.";
        return;
    }


    const notaFinal = (nota1 + nota2 + nota3) / 3;


    let mensaje = `La nota final es: ${notaFinal.toFixed(2)}. `;
    if (notaFinal >= 4) {
        mensaje += "El estudiante ha aprobado.";
    } else {
        mensaje += "El estudiante ha reprobado.";
    }


    document.getElementById("resultado").innerHTML = mensaje;
}
