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
console.log(primeiroNome.toUpperCase);
console.log(myNUumbers.length);

//Adicionando um número elemento ao array 
myNUumbers.push(5);

//tuplas - existe com python
// um molde de como nossa lista tem que ficar 
let myTuple: [number, string, string[]];

myTuple = [5, "TEste", ["a", "b"]];

// ASsim nao pode ficar 
//myTuple = [true, false, true ]
// fim do assim nao pode ficar



//objct literals 30:37