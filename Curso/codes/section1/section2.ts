// main.js
let numberOfCards = 1;
console.log("Hola mundo desde TypeScript!!");
add();
add();
add();
add();

// Funciones
export function add() {
    console.log('Linea #', numberOfCards);
    numberOfCards+=1;
}