// Tipos no JS = String, boolean, number
let x: number = 10;

x = 50;


console.log(x);


// inferencia x annotation = definição de variavael 
// inferencia = menor código

let y = 12; // Definindo a varivel por inferencia 
let z: number = 12; //Definindo variavel por annotation

// Tipo Básicos 
let primeiroNome: string = "Jonathas";
let idade: number = 26;
const isAdmin: boolean = true;

console.log(typeof primeiroNome);

primeiroNome = "MudeiONome";
console.log(primeiroNome);

//objet - Definido Arrays ou lista como chama
const myNUumbers: number[] = [1,2,3];

console.log(myNUumbers);
console.log(myNUumbers.length);