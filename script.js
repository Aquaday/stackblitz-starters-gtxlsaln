/*
Datatyper

Oppgaver
1. Lag variabel name, age, isLearningJs, putt inn forskjellige datatyper om deg selv
2. Console.log hver variabel
3. Bruk console log for å finne datatypen til en variabel
4. Lag en array av forskjellige ingredienser til en bakeoppskrift

Funksjon

Oppgaver

1. lag en funksjon som console.log 'Hello World'
2. Lag en funksjon som legger sammen 2 tall
3. Lag en funksjon med en variabel som har en array og console.log arrayet


[] lister, hendvise til lister

() back funksjonsnav, console log

{} objekter, datalagring

*/

/*


//DATATYPER//
//number
let number = 23;

//string
let firstName = "Martin";

//boolean
let isTeaching = true;

//errordata
Undefined
Null
Nan (not a number)

//array
let shoppingList = ["såpe", "mel", "ost" ];

let numberList = [0,3,5,1,2,5];

//Object
let firstObject = {
    firstName: "Martin", 
    age: 26,
    city: "Bergen",
};

//variabelDefinering

// let åpen, kan endres seinere

// const Låst

firstName = "Peter";

let nrOne = 45;
let nrTwo = "Frank";

let sum = nrOne + nrTwo;

console.log(typeof nrOne);

*/


let bilListe = {
    bil1: "BMW",
    bil2: "Volkswagen",
    bil3: "Volvo"
}

let tallListe = [1,2,3]

let tallListe2 = [2,3,4]

let sum = tallListe + tallListe2

console.log(sum)

let firstName = "Martin"

let age = 26
 
let city = "Bergen"


console.log("Variabler:", firstName, age, city)
console.log("type variabler:", typeof firstName, typeof age, typeof city)

let kursDato = ["04.02.25", "06.02.25"]

console.log(kursDato)

console.log("Hello World!")

let nrOne = 450
let nrTwo = 912

console.log(nrOne + nrTwo)

console.log(bilListe)

function addNr(){
    
    let nrThree = 50
    let nrFour = 65

    let nr = nrThree + nrFour

    console.log("samlet antall er" + " " + nr)
}

addNr()

let printHello = () => {
    console.log("Heisann Verden")
}

printHello()

let listeFarge = () => {
    let farge1 = "grønn"
    let farge2 = "blå"
    let farge3 = "gul"

    console.log(`${farge1} ${farge2} ${farge3}`)
}

listeFarge()