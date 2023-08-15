//Clases y objetos
//Objetos
// Es una representacion abstrata de un objeto de una cosa en la vida real
export let carro = {
    color: 'blanco',
    traccion: '4x4',
    llantas: 4,
    puertas: 5,
    marca: 'Mitsubishi'
}
console.log(`Llantas ${carro.llantas}`);

let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbie: ['soccer', 'baseball'],
    toString(){
        let objectString = this.name + ' ' + this.age
        console.log(objectString);
    }
}
person.toString();

//--------
let car = {
    doors: 5,
    brand: ['Mitsubishi', 'Toyota', 'Honda'],
    color: 'red',
    gearBox: 'manual'
}

let smartTv = {
    sizeInches: 90,
    brand: ['Samsung', 'LG', 'Sony'],
    year: 2015,
    type: '4k'
}

let youtubeVideo = {
    length: 3600,
    author: 'Bryan1590',
    comments : ['Good video', 'Bad video', 'Nice video'],
    views: 1000000
}
console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
//-----------------------------------------------------------

