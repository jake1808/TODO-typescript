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
