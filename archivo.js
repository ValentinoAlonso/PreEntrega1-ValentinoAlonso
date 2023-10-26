class Estudiante {
    constructor() {
        this.notas = [];
    }

    agregarNota(nota) {
        if (!isNaN(nota)) {
            this.notas.push(parseFloat(nota));
            this.actualizarNotasEnLocalStorage();
        } else {
            throw new Error("Por favor, ingrese un valor numérico válido en todas las notas.");
        }
    }

    calcularNotaFinal() {
        if (this.notas.length === 0) {
            return "No se ingresaron notas.";
        }

        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const notaFinal = suma / this.notas.length;

        const mensaje = `La nota final es: ${notaFinal.toFixed(2)}. `;
        if (notaFinal >= 4) {
            return mensaje + "El estudiante ha aprobado.";
        } else {
            return mensaje + "El estudiante ha reprobado.";
        }
    }

    actualizarNotasEnLocalStorage() {
        localStorage.setItem("notas", JSON.stringify(this.notas));
    }
}

const estudiante = new Estudiante();

// Cargar las notas desde el almacenamiento local al cargar la página
const notasGuardadas = localStorage.getItem("notas");
if (notasGuardadas) {
    estudiante.notas = JSON.parse(notasGuardadas);
}

function agregarNota() {
    const notaInput = document.getElementById("nota");
    const nota = notaInput.value;

    try {
        estudiante.agregarNota(nota);
        notaInput.value = ""; // Limpiar el campo de entrada
        document.getElementById("resultado").innerHTML = "Nota agregada exitosamente.";
    } catch (error) {
        document.getElementById("resultado").innerHTML = error.message;
    }
}

function calcularNotaFinal() {
    const resultado = estudiante.calcularNotaFinal();
    document.getElementById("resultado").innerHTML = resultado;
}