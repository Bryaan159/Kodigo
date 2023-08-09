//Interface
interface Person{
    name: string;
    age: number;
    isActive: boolean;
}

//Arreglo de objetos
let Bryan: Person= {
    name: 'Bryan',
    age: 22,
    isActive: true
}
let Carolina:Person = {
    name: 'Carolina',
    age: 27,
    isActive: true
}
let Gabriel:Person = {
    name: 'Gabriel',
    age: 22,
    isActive: false
}


// let people = [Bryan, Carolina, Gabriel];
// for(let i = 0; i<people.length; i++){
//     console.log(people[i].name, people[i].age);
// }

//----------------------------------------------------------------
// Diferencia entre una clase y una interfaz

//Explicación de clases
//Al igual que los objetos, pueden ser representaciones abstracta de cosas
//Son un modelo a seguir
class Galleta{
    bolitas:number;
    sabor:string;
    precio:number;
    fechaCreacion:Date;

    //Constructor(metodo)
    constructor(){
        this.bolitas = 0;
        this.sabor = 'No brand';
        this.precio = 0;
        this.fechaCreacion = new Date();
    }
}


let galleta1 = new Galleta();

let galleta2 = new Galleta();

console.log(galleta1);
console.log(galleta2);

// let galleta2:Galleta = {
//     bolitas: 50,
//     sabor: 'Vainilla',
//     precio: 5,
//     fechaCreacion: new Date()
// }
// let galleta3:Galleta = {
//     bolitas: 200,
//     sabor: 'Fresa',
//     precio: 15,
//     fechaCreacion: new Date()
// }

// console.log("Informacion de cada producto");
// console.log("---------------------------");
// let snacks = [galleta1, galleta2, galleta3];
// for(let i=0; i<snacks.length;i++){
//     console.log('Bolitas:' ,snacks[i].bolitas,'Sabor: ', snacks[i].sabor,'Precio: ' ,snacks[i].precio, 'Fecha:',snacks[i].fechaCreacion.getHours(),':',snacks[i].fechaCreacion.getMinutes(),':',snacks[i].fechaCreacion.getSeconds());
// }