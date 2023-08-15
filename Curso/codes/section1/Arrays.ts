//Arreglos
export let flores:string[] = ["Rosa","Girasol", "Lirios" , "Rosa azul"];
let florMain:string = flores[1];

let employees:string[] = ["Eduardo", "Roberto", "Carolina", "Maria"];
let salariees:number[] = [1500,2500,5000,5500];

// console.log("Flores");
// for(let i=0; i<flores.length; i++){
//     console.log("#",i, flores[i]);
// }
//Tarea sobre arreglos
console.log("Detalles del empleado");
for(let i=0; i<employees.length;i++){
    console.log(`El empleado ${employees[i]} tiene un salario ${salariees[i]}`);
}
