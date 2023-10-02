function calcularNotaFinal() {
    const notas = document.querySelectorAll(".nota");
    let suma = 0;
    let cantidadNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = parseFloat(notas[i].value);

        if (isNaN(nota)) {
            document.getElementById("resultado").innerHTML = "Por favor, ingrese valores numéricos válidos en todas las notas.";
            return;
        }

        suma += nota;
        cantidadNotas++;
    }

    if (cantidadNotas === 0) {
        document.getElementById("resultado").innerHTML = "No se ingresaron notas.";
        return;
    }

    const notaFinal = suma / cantidadNotas;

    let mensaje = `La nota final es: ${notaFinal.toFixed(2)}. `;
    if (notaFinal >= 4) {
        mensaje += "El estudiante ha aprobado.";
    } else {
        mensaje += "El estudiante ha reprobado.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}
