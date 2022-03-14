class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); 

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();


class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();


class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); 
