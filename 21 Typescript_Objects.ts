//Write the program that create objects containing these items.

// const PersonName_Array :string[] = ['Person','car','Cold Drink'];

interface person {

    age : number ,
    name : string ,
    nationality : string ,
    student : Boolean ,
}

let person : person = {

    age : 16 ,
    name : 'Khansa' ,
    nationality : 'Pakistani' ,
    student : true 
}

console.log(person);

interface car{

    maker : string ,
    color : string ,
    automatic : Boolean ,
} 

let car = {

    maker : 'Toyota' ,
    color : 'White' ,
    automatic : true 
}

console.log(car);