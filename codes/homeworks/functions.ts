//Functions
export function convertPtoKg(pounds:number):number{
    return pounds * 0.453592;
}

export function convertKmtoMiles(kilometers:number):number{
    return kilometers * 0.621371;
}

export function getAreaOfTriangule(base:number, height:number){
    return (base * height) / 2.0;
}

//let numbers = [1,6,8,4,2,7,10,3,5];
export function getHighestNumber(array:number[]){
    let highest = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]>highest){
            //1 > 0 -> highest = 1
            //6 > 1 -> highest = 6
            //8 > 6 -> highest = 8
            //4 > 8 -> highest = 8
            //2 > 8 -> highest = 8
            //7 > 8 -> highest = 8
            //10 > 8 -> highest = 10
            //3 > 10 -> highest = 10
            //5 > 10 -> highest = 10
            highest = array[i];
            // highest = 10
        }
    }
    return highest;

}
export function getParorImpar(array:number[]){
    for(let i=0 ; i<array.length; i++){
        if(array[i]%2 == 0){
            console.log("El numero " + array[i] + " es par");
        }else{
            console.log("El numero " + array[i] + " es impar");
        }
    }
}

export function getTable():void{
    for(let i=1; i<=5; i++){
        let line= '';
        for(let j=1; j<=5; j++){
            line += ` ${j*i}`;
        }
        console.log(line);
    }
}

export function highestNumber(a:number, b:number, c:number):number{
    let highest = 0;
    if(a > b && a > c)
        highest = a;
    else if(b > a && b > c)
        highest = b;
    else
        highest = c;

    return highest;

}

// let heros = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier', 'Wolverine', 'Gambito'];
export function largestNameOfArray(nameArray:string[]){
    let largestName = '';
    for(let i = 0; i<nameArray.length; i++){
        //Deadpool.length > 0.length -> largestName = Deadpool
        //Ciclope.length > Deadpool.length -> largestName = Deadpool
        //Magneto.length > Deadpool.length -> largestName = Magneto
        //Profesor Charles Xavier.length > Magneto.length -> largestName = Profesor Charles Xavier
        //Wolverine.length > Profesor Charles Xavier.length -> largestName = Profesor Charles Xavier
        //Gambito.length > Profesor Charles Xavier.length -> largestName = Profesor Charles Xavier
        if(nameArray[i].length > largestName.length)
            largestName = nameArray[i];
    }
    return largestName;
}

export function heroesThatStartWith(array:string[], letter:string):string[]{
    letter = letter.toUpperCase();
    let heroes:string[] = []; // Específicar que el arreglo es de tipo string[]
    for(let i = 0 ; i<array.length;i++){
        if(array[i].charAt(0) === letter){
            heroes.push(array[i]);
        }
    }
    return heroes;
    
}