// let arr1 = [1,2,3];
// let arr2 = [...arr1];

// arr2[0] = 100;

// console.log(arr1);
// console.log(arr2);



// let arr1 = [1,2,3,4,5,100];
// let arr2 = [500, 600, 700, ...arr1];

// arr2[0] = 100;

// console.log(arr1);
// console.log(arr2);



// With Objects

// let emp = { id: 1, name : "Saqib"}
// let details = {...emp, role: "Developer"}
// console.log(emp);
// console.log(details);



// let emp = { id: 1, name : "Saqib"}
// let details = {...emp, role: "Developer"}
// // details.name = "Lala";

// details.name = {...emp};
// console.log(emp);
// console.log(details);



// let arr1 = [1,2, {name: "Jk"}];
// let arr2 = [...arr1];

// console.log(arr2);

// arr2[1] = 10;
// console.log(arr1);
// console.log(arr2);

// arr2[2].name = "SK";
// console.log(arr1);
// console.log(arr2);



// Basic callback example (Syncronous)
function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Saqib";
    callback(name);
}

processUserInput(greet);