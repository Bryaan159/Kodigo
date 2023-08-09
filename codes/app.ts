//Interface
interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

//Arreglo de objetos
let Bryan: Person = {
    name: 'Bryan',
    age: 22,
    isActive: true
}
let Carolina: Person = {
    name: 'Carolina',
    age: 27,
    isActive: true
}
let Gabriel: Person = {
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
class Galleta {
    bolitas: number;
    sabor: string;
    precio: number;
    horneado: boolean;
    decorado: boolean;
    fechaCreacion: Date;

    //Constructor(metodo)
    constructor() {
        this.bolitas = 10;
        this.sabor = 'No brand';
        this.horneado = false;
        this.decorado = false;
        this.precio = 0;
        this.fechaCreacion = new Date();
    }

    //Metodos
    hornear() {
        if (this.horneado) {
            //Aqui es para confirmar si esta en false
            console.log("Si estaba horneada entonces la quemaste");
            //Si esta en flase entonces pongo un return
            return;
        }
        if(this.bolitas <=0){
            console.log("La galleta no tiene bolitas");
            return;
        }
        

        //Aqui pasar de False a True
        this.horneado = true;
        console.log("La galleta ya tiene bolitas");
        console.log('Horneando');
    }

    //
    
}

let galleta1 = new Galleta();

console.log(galleta1);
console.log("#1-----------------------------");
galleta1.hornear();
console.log("-----------------------------");
console.log(galleta1);
