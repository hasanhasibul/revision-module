const name = "Hasibul Hasan";
console.log(name);
// name = "Tushar " // let variable value can not be change 
console.log(name);

//let 
const array = [1,2,3,4,5,7];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element ;
}

console.log(sum);

//object
const object = {
    name : "Hasib",
    Id : 1234,
    cgpa : 3.30,
    dept : "cse",
}

console.log(object);

// class 

class student2 {
    constructor(){
  
        this.varsity = "city"
    }
}
class student extends student2 {
    constructor(name,id,dept,BGroup){
        super()
        this.name = name,
        this.id = id,
        this.dept = dept,
        this.BGroup = BGroup
    }
}



const student1 = new student('Masud',028,'cse','A+');
const student5 = new student ('hasib',015,'cse',"ab+");

console.log(student1);
console.log(student5);


// FUNCTION DEFAULT PARAMETER FOR NOT PROVIDED VALUES

function newFunction(num1,num2 = 7){
    return num1 + num2 ;
}
console.log(newFunction(5));

// template string 

console.log(`this is line number one
line number two
line number three`);

//ARROW FUNCTION, MULTIPLE PARAMETER, FUNCTION BODY

const arrayFunction = (first,last) =>{
    const add = first + last ;
    return add;

}

const addSum = arrayFunction(17,5);
console.log(addSum);

//SPREAD OPERATOR, CONCATENATE MULTIPLE ARRAYS, ARRAY MAX

const array1 =[12,3,45,6,7,8];
const array2 = [5,6,7,88,22,33];
const array3 = [100,122,2,333,666,122]

const newArray = Math.max(...array1,...array2,...array3)
// const maxArray = newArray.Max();
console.log(newArray);

//map, filter, find, smart way to run for loop

