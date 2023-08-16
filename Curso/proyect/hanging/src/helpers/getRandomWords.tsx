let randomWord:string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'CASA',
    'PAPAYA',
    'ANIMAL',
    'VETERINARIA',
    'CELULAR',
    'IPHONE'
];

export function getRandomWords(){
    //Explicación de código
    let random = Math.floor(Math.random() * randomWord.length);         
    return randomWord[random];

}