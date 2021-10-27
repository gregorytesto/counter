// Context/ This

// Object


// let obj1 = {
//     name: "Celery Man",
//     yell: function(){
//         // console.log(this);

//         function inner(){
//             // console.log(this);
//             console.log("I AM " + this.name.toUpperCase() + "!!!!!!!");
//         }
//         console.log(inner);
//         inner = inner.bind(this);
//         console.log(inner);
//         inner();
//     }
// }

// let obj2 = {
//     name: "Tayne",
//     yell: function (){
//         const inner = () => {
//             console.log(this);
//         }
//         inner();
//         // console.log("I AM " + this.name.toUpperCase() + "!!!!!!!");
//     }
// }

// obj1.yell();


// OOP

// Class

class Animal{
    constructor(species){
        let _species = species;
        this.setSpecies(_species);
    }
    getSpecies(){
        if(true){
            return this.species;
        } else {
            return "You're not authorized";
        }
    }
    setSpecies(species){
        if(species.length > 2){
            this.species = species;
        } else {
            console.error("Species length must be greater than 2 chars");
        }
    }
}

class Pet extends Animal{

}







let myPet = new Pet("Fluffy");



let animalInstance = new Animal("Giraffe");
// let animalInstance2 = new Animal("Penguin");

console.log(animalInstance2.getSpecies());

// console.log(animalInstance);

// Instance

// Inheritance

// Abstraction

// Polymorphism

// Encapsolation

// Context

// let arr = new Array();
// arr.map(()=>{

// }
