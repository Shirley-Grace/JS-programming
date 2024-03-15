//state and behaviour(Properties and methods)
//store data in the form of key,value pai

//object litteral
//object ={property1: value1,property2: value2 ... propertyn: valuen}

const person ={
    //name:"John",
    //age:34,
    city:"london",
    carreer:"doctor",
    isStudent:false
};
console.log(person);

const car ={
    brand:`volkswagen`,
    model:"beetle",
    year:1976,
    isAuto:false
};
//console.log(car);

const student ={
    //name: "shirley",
    isStudent: true,
    //city: "nairobi",
    children: 4

};
//console.log(student);

//let objectName = new object ()

const persons = new Object();
person.name = `Abraham`;
person.city =`nairobi`;
person.age ="49";

//console.log(persons);

const cars = [
    {brand: "Mercedes", model: "c200", year:2008},
    {brand:"Volkswagen", model:'Beetle', year: 1975},
    {brand: "BMW", model:  "X3", year:2018},
]

console.log(cars[1].model);


class Person{
    constructor(firstName,lastName, age, isStudent){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.isStudent =isStudent;
    }
}
const person1 = new Person("jared","dorel",59, false);
console.log(person1);

function Persons(firstName,lastName, age, isStudent){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.isStudent =isStudent;
    }
    const person2 = new Person("jared","dorel",59, false);
    console.log(persons);

























