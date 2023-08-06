export function pedirDato() {
    const datoIngresado = prompt("Por favor, ingresa un dato:");

    // Comprobamos si datoIngresado no es null antes de utilizarlo
    if (datoIngresado !== null) {
        const resultadoID = document.getElementById("resultado");
        const analisisID = document.getElementById("analisis");
        // Convertir datoIngresado a número
        const datoNumerico = parseFloat(datoIngresado);
        if (resultadoID) {
            resultadoID.textContent = datoIngresado;
        }

        if (!isNaN(datoNumerico) && analisisID) {
            //Declaraciones de variables para las notas
            const A_PLUS = 100;
            const A_SCORE = 90;
            const B_SCORE = 80;
            const C_SCORE = 70;
            const D_SCORE = 60; 
            if (datoNumerico >= A_SCORE) {
                if (datoNumerico === A_PLUS) {
                    analisisID.textContent = "A+";
                }else {
                    analisisID.textContent = "A";
                }
            }else if (datoNumerico >= B_SCORE) {
                analisisID.textContent = "B";
            } else if (datoNumerico >= C_SCORE) {
                analisisID.textContent = "C";
            } else if (datoNumerico >= D_SCORE) {
                analisisID.textContent = "D";
            } else if (datoNumerico < D_SCORE) {
                analisisID.textContent = "F";
            } else {
                console.log("No se ingresó ningún dato.");
            }
        }
    }
}

// Llamamos a la función para pedir el dato por pantalla
pedirDato();
