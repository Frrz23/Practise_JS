// // Variables
// var x=90;
// console.log(x);

// var x=900;
// console.log(x);

// // LET
// let y=10;
// console.log(y);

// y=1000;
// console.log(y);

// // const
// const a=10;
// console.log(a);

// // Uncommenting the next line will throw an error because `a` is a constant
// // a=20;
// // console.log(a);

// // Data type in js
// // String
// const output="ram sherpha";
// console.log(output);
// console.log(typeof output);

// // Number
// const result=90;
// const output="40";
// console.log(result+output);
// console.log(typeof result);

// // undefined
// let y;
// console.log(typeof y);

// // null
// let a=null;
// console.log(typeof a);

// // boolean
// const isTrue=true;
// console.log(typeof isTrue);

// // bigint
// const b=344465545n;
// console.log(typeof b);

// // symbol
// const out=Symbol("hello world");
// console.log(out);
// console.log(typeof out);

// // type conversion
// const result ="123";
// console.log(result);
// console.log(typeof result);
// const output = parseInt(result);
// console.log(output);
// console.log(typeof output);

// const ex=976;
// const out = ex.toString();
// console.log(out);
// console.log(typeof out);

// const row=false;
// const ans = String(row);
// console.log(ans);
// console.log(typeof ans);

// // object types
// const obj={
//     name : 'name',
//     age : 45,
//     married : false,
// }
// console.log(obj);
// console.log(typeof obj);

// const arr =[3,4,5,6,7];
// console.log(arr);
// console.log(typeof arr);

// const date=new Date();
// console.log(date);
// console.log(typeof date);

// const name ="1";
// const no=1;
// const obj=Number(name);
// console.log(no+obj);

// // String Method
// const result ="          hello world";
// console.log(result.length);
// console.log(result.charAt(0));
// console.log(result.indexOf("l"));
// console.log(result.lastIndexOf("l"));
// console.log(result.toLowerCase());
// console.log(result.toUpperCase());
// console.log(result.replace("llo","good"));
// console.log(result.includes("hello"));
// console.log(result.slice(1,0));
// console.log(result.concat("Moooooooooooooode"));
// console.log(result.trim());
// console.log(result.split(""));

// const a=60;
// const b=45;
// const result=a+b;
// console.log("the sum is:" + result);
// console.log(`the sum is: ${result}`); // template literal

// let y=90;
// y=y+10;
// console.log(y);

// let x=10;
// x+=10;
// console.log(x);

// let age=50;
// console.log(age<=10 ? "fail" : "PASS");

// const obj={
//     name:"John Doe",
//     age: 30,
// }
// delete obj.name;
// console.log(obj);

// let email="joe@gmail.com";
// let password=98515854;

// if(email==="joe@gmail.com" || password == 98515854){
//     console.log("Email is valid");
// }else{
//     console.log("Email is invalid");
// }

// let grade=90;
// if(grade >= 90 && grade <=100){
//     console.log("Grade is A+");
// }else{
//     console.log("Grade is A");
// }

// let date = new Date().getDay();
// switch(date){
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
// }

// let i=5;
// while(i<=10){
//     console.log("traveling needed bored death");
//     i++;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`2*${i}=${2 * i}`);
// }

// const arr=[1,2,3,4,5];
// let sum=0;
// for (let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// let i=0;
// console.log(arr[i]);
// console.log(typeof arr);
// console.log("the sum is:", sum);

// // Array
// let arr=[1,2,3,4,5,"apple","banana"];
// let output=["sam","ram",45,66];
// arr.push(12);

// let result=arr.includes(1);
// console.log(result);

// console.log(output.join("   "));

// let no=arr.splice(1,3);
// console.log(no);

// let bo=arr.slice(1,4);
// console.log(bo);

// let mo=arr.indexOf(3);
// console.log(mo);
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let arr=[];
// let sum=0;

// for(let i=0; i<10; i++){
//     arr.push(i);
//     sum+=arr[i];
// }
// let mul=sum*2;
// console.log(mul);
// console.log(arr);
// console.log(sum);

// // Object
// let person={
//     name:"John Doe",
//     age: 30,
//     city: "New York",
//     address:{
//         street:"123 Main St",
//         city:"New York",
//         state:"NY"
//     },

//     greet:function (){
//         console.log(`Hello, my name is ${this.name}`); 
//     }
// };
// const{
//     name,
//     age,
//     city,
//     address: {
//         street,
//         city: cityName
//     }
// }=person;

// console.log(person.address.city);
// person.greet();

// function myfunc(){
//     let x=prompt("enter first number");
//     let y=prompt("enter second number");
//     let result=Number(x)+Number(y);
//     if(result){
//         alert(`sum of two integers is: ${result}`);
//     }
// }
// myfunc();

// // scoping
// function myfunc(){
//     if(true){
//         var x=10;
//         let y=20;
//         const z=30;
//         console.log(y);
//         console.log(z);
//     }
//     console.log(x);
// }
// myfunc();

// // DOM
// let result=document.getElementById("one");
// result.innerText="This text has been changed.";
// result.style.backgroundColor="black";
// result.style.color="red";
// result.style.textAlign="center";

// let output=document.getElementsByClassName("two")[0];
// output.innerText="This text has been changed.";
// output.style.backgroundColor="black";
// output.style.color="red";
// output.style.textAlign="center";

// let ans=document.getElementsByClassName("two");
// ans[1].innerText="This text has been changed.";
// ans[1].style.backgroundColor="black";
// ans[1].style.color="red";
// ans[1].style.textAlign="center";

// let show=document.getElementsByTagName("span");
// show[0].style.backgroundColor="black";
// show[0].style.color="red";
// show[0].style.textAlign="center";

// let x=document.getElementsByTagName("span");
// x[1].style.backgroundColor="black";
// x[1].style.color="red";
// x[1].style.textAlign="center";

// let j = document.getElementById("submit");
// let k = document.querySelector(".delete");

// j.style.backgroundColor="green";
// k.style.backgroundColor="red";

// k.setAttribute("class","newclass");
// console.log(k.getAttribute("class"));

// function task(){
//     let display = document.createElement("div");
//     display.innerHTML="this is an example";
//     document.body.prepend(display);
// }

// k.onclick = function ntask(){
//     let h1=document.querySelector("h1");
//     h1.remove();
// }

// let btn =document.querySelectorAll("button");
// btn[0].innerText = "Button 1";
// btn[0].style.backgroundColor ="red";
// console.log(btn);



// const merofun=(name,age)>{
//     console.log(`merofun: ${name}.and ${age}`)
// };

// merofun("sita", 24)


// advance array methods
let newArr= [1,2,3,4,5,6];
//find


// let output=newArr.find((value,index) =>value>6);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let output = products.find((value.index)=value.instock);
// console.log(output);


////filter


// let output=newArr.filter((value,index) =>value>6);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let out = products.filter((value,index)=> !value.instock);
// console.log(out);

///some

// let output=newArr.some((value,index) =>value>6);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let out = products.some((value,index)=> !value.instock);
// console.log(out);


///every////

// let output=newArr.every((value,index) =>value>6);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let out = products.every((value,index)=> !value.instock);
// console.log(out);

//foreach/////cant change array elements and return array elements

// let output=newArr.forEach((value,index) =>value*2);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let out = products.forEach((value,index)=> value.name);
// console.log(out);


////map////

// let output=newArr.map((value,index) =>value*2);

// console.log(output);

// const products = [
//     { id: 1, name: "doctor sam", price: 8000, instock: true },
//     { id: 2, name: "doctor ram", price: 7000, instock: false },
//     { id: 3, name: "doctor jatin", price: 8820, instock: true },
//     { id: 4, name: "doctor hari", price: 8050, instock: false },
// ];


// let out = products.map((value,index)=> value.name);
// let ans=document.createElement("h4");
// ans.innerText=out;
// document.body.prepend(ans);



/////reduce/////////first value is accum and second is current value and the sum of them in accum and third is current value thats how it adds
let output=newArr.reduce((accum,currval) =>accum+currval);

console.log(output);//single line return element

const products = [
    { id: 1, name: "doctor sam", price: 8000, instock: true },
    { id: 2, name: "doctor ram", price: 7000, instock: false },
    { id: 3, name: "doctor jatin", price: 8820, instock: true },
    { id: 4, name: "doctor hari", price: 8050, instock: false },
];


let out = products.reduce((total,currval)=> total+currval.price,0);
console.log(out);