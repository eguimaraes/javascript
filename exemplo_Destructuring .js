const array = [1, 2, 3];
const [a, b] = array;
console.log(a);
console.log(b); 
console.log(array); 

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name);
console.log(age); 
console.log(myObj); 


const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); 

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); )
