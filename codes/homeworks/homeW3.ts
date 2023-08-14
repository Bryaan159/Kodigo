import { getAreaOfTriangule } from "../homeworks/functions";

let base:number = 10.5;
let height:number = 20.2;
console.log("base: " + base);
let resultado:number = getAreaOfTriangule(base, height);
console.log(`The area of a triangule with base ${base} and height ${height} is ${resultado}`)