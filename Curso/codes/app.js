"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirDato = void 0;
function pedirDato() {
    var datoIngresado = prompt("Por favor, ingresa un dato:");
    // Comprobamos si datoIngresado no es null antes de utilizarlo
    if (datoIngresado !== null) {
        var resultadoID = document.getElementById("resultado");
        var analisisID = document.getElementById("analisis");
        // Convertir datoIngresado a número
        var datoNumerico = parseFloat(datoIngresado);
        if (resultadoID) {
            resultadoID.textContent = datoIngresado;
        }
        if (!isNaN(datoNumerico) && analisisID) {
            var A_PLUS = 100;
            var A_SCORE = 90;
            var B_SCORE = 80;
            var C_SCORE = 70;
            var D_SCORE = 60;
            if (datoNumerico >= A_SCORE) {
                if (datoNumerico === A_PLUS) {
                    analisisID.textContent = "A+";
                }
                else {
                    analisisID.textContent = "A";
                }
            }
            else if (datoNumerico >= B_SCORE) {
                analisisID.textContent = "B";
            }
            else if (datoNumerico >= C_SCORE) {
                analisisID.textContent = "C";
            }
            else if (datoNumerico >= D_SCORE) {
                analisisID.textContent = "D";
            }
            else if (datoNumerico < D_SCORE) {
                analisisID.textContent = "F";
            }
            else {
                console.log("No se ingresó ningún dato.");
            }
        }
    }
}
exports.pedirDato = pedirDato;
// Llamamos a la función para pedir el dato por pantalla
pedirDato();
