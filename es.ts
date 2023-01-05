//ECMASCRIPT FEATURES
/*------------------------------------------------------------------------*/
//1. DEFAULT PARAMETERS
// Allows you to specify a default value if no value is passed
// into the function
// let container = document.getElementById('container');
// function countDown(initial, final=0, interval=1){
//     let current = initial;
//     while (current> final) {
//         console.log(current);
//         container.innerHTML = current;
//         current -= interval;
//     }
// }
// countDown(20);
/*------------------------------------------------------------------------*/
//2.TEMPLATE STRINGS
// Template strings allows you to construct a string
// that includes the values of your variables.
// let container = document.getElementById('container');
// let todo = {
//     id:123,
//     name:'pick up drycleaning',
//     completed: true
// }
// container.innerHTML = `
// <div todo=${todo.id} class="list-group-item">
//     <i class="${todo.completed?"":"hidden"} text-success glyphicon glyphicon-ok"></i>
//     <span class="name">${todo.name}</span>
// </div>
// `
/*------------------------------------------------------------------------*/
//3. VAR, LET AND CONST
// The var keyword allows you to define a variable and that variable is not restricted to a scope
// var container = document.getElementById('container');
// for (var x=0; x <= 5; x++){
//     var counter =x;
// }
// console.log(counter);
// The let keyword allows you to define a variable and that variable is block scoped
// let container = document.getElementById('container');
// for (let x = 0; x <= 5; x++) {
//     let counter = x;    
// }
// console.log(counter);
// The const keyword allows you to define a variable but that variable is immutable meaning it can not be changed and the variable is block scoped.
// const container = document.getElementById('container');
// for (let x=0; x<=5; x++) {
//     const counter=x;
//     counter=3
// }
// console.log(counter);
/*------------------------------------------------------------------------*/
//4. FOR... OF LOOPS
// var array=["pick up drycleaning", "Clean batcave", "Save Gotham"];
// //for in loops only allows you to grab the index of the array
// for (var index in array){
//     var value = array[index];
//     console.log(`${index}: ${value}`);
// }
// //for of loops allow you to grab the value in the array
// for(var value of array){
//     console.log(`${value}`);
// }
/*------------------------------------------------------------------------*/
// 5. LAMBDAS
// var container = document.getElementById('container');
// function Counter(el){
//     this.count = 0;
//     el.innerHTML = this.count;
//     //Without this reference to this you the browser will mistaken your counter variable
//     // thats in the scope of the counter function for a global counter function.
//     let _this=this;
//     el.addEventListener('click',
//         function (){
//             _this.count += 1;
//             el.innerHTML = _this.count;
//         }
//     )
// }
// or you can use a lambda function also known as an arrow function
// function Counter(el){
//     this.count = 0;
//     el.innerHTML = this.count
//     el.addEventListener('click',
//     //lambda
//     ()=>{
//         this.count += 1;
//         el.innerHTML = this.count;
//     })
// }
// new Counter(container);
/*------------------------------------------------------------------------*/
// 6. DESTRUCTING
// This allows to assign multiple variables from an array
// var array = [123, "pick up drycleaning", false];
// var [id, title, completed] = array;
// console.log(id, title, completed);
// var a=1;
// var b=5;
// [a,b]=[b,a]
// console.log(a, b)
// // destructuring a object requires the variables to have the same name as the properties in the object
// // they can be put in any order as long as the names match
// //  you can change the name of the variable by using :
// var todo ={
//     id:123,
//     title: "Pick up drycleaning",
//     completed: false
// }
// var {id, title, completed:isCompleted}=todo;
// console.log(id, title, isCompleted);
