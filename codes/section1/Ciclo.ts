// //Switch
// let weekDay  = 3;
// if (weekDay <= 0) {
//     throw new Error("El valor no puede ser menor o igual a 0");
// }

// switch (weekDay) {
//     case 1:
//         console.log("Es lunes");
//         break;
//     case 2:
//         console.log("Es martes");
//         break;
//     case 3:
//         console.log("Es miércoles");
//         break;
//     default:
//         console.log("No es ningún día de la semana");
// }

// While
// let gasTank = 50;
// let trips = 0;
// console.log("Iniciando recorrido");
// while(gasTank > 0) {
//     console.log(`Gas restante: ${gasTank}`);
//     gasTank--;
//     trips++;
//     if (gasTank == 0) {
//         console.log("Se acabó la gasolina");
//     }
// }
// console.log("------------------------");
// console.log("Terminando recorrido!");
// console.log("Cantidad de viajes: " + trips);

// Do While
// let gasTank = 25;

// do {
//     console.log(`Gas restante: ${gasTank}`);
//     gasTank--;
// } while(gasTank > 0);
// console.log("Ya no tienes gasolina");

//For
// console.log("For");
// for (let i = 1; i<11; i++){
//     console.log("iteración: " + i);
// }

//Tarea
export const base:number = 10;
let limit:number = 50;

console.log(`Tabla del ${base}`);
// for(let i = 1; i <= limit; i++){
//     console.log(`${base} x` +` ` +i + ` = ` + (base*i));

// }
let i = 1;
while(i <= limit){
    console.log(`${base} x` +` ` +i + ` = ` + (base*i));
    i++;
}

