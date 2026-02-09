// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// let p1 = new person("sk", 20)
// console.log(p1)
// console.log(this);


// let person = {
//     name: "John",
//     age: 32,
//     isEmployed: true,
//     greet: function(){
//         console.log("Hello my name is " + this.name);
//         console.log(this);
//         let innerGreet = function(){
//             console.log("Hello from innerGreet, my name is" + this.name);
//             console.log(this);
//         }
//         innerGreet();
//     }
// };
// person.greet();



// let arr = [4,5,6]
// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];

// let [a, , b, ] = arr;
// console.log(b);


// Default value 
// const data= [5];
// const [x="se",y=10] = data;
// console.log(x);   // 5
// console.log(y);   // 10



let person = {
    Sname: "Dasha",
    age: 18,
    address: "Russia"
}

// const {Sname:a, age:b, address:c} = person;
// console.log(a, c, b);


let {country = "USA"} = person;
console.log(person);

// const matrix = [1,[2,3]]