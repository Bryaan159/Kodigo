// main.js
function showVariables() {
    let a = 10;
    a = a + 10;
    let numberOfCars = 5 + 1;
    let holaMundo = "Hola Mundo";
    console.log("Valor de la variable 'a':", a);
    console.log("Valor de la variable 'numberOfCars':", numberOfCars);
    console.log("Valor de la variable 'holaMundo':", holaMundo);
    if(typeof window !== 'undefined'){
        document.getElementById('variable-a').textContent = a;
        document.getElementById('variable-b').textContent = numberOfCars;
        document.getElementById('variable-c').textContent = holaMundo;


    }
}

// Si estamos en un entorno de navegador, ejecutamos la función directamente
if (typeof window !== 'undefined') {
    document.addEventListener("DOMContentLoaded", showVariables);
}

// Si estamos en un entorno de Node.js, ejecutamos la función después de un breve retraso
if (typeof window === 'undefined') {
    setTimeout(showVariables, 100);
}
