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
var container = document.getElementById('container');
var todo = {
    id: 123,
    name: 'pick up drycleaning',
    completed: true
};
container.innerHTML = "\n<div todo=".concat(todo.id, " class=\"list-group-item\">\n    <i class=\"").concat(todo.completed ? "" : "hidden", " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">").concat(todo.name, "</span>\n</div>\n");
