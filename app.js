"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var DataAccess_1 = require("./DataAccess");
var service = new DataAccess_1.TodoService([]);
service.add({
    id: 1,
    name: 'Pick up laundry',
    state: model_1.Todostate.NEW
});
var todos = service.getAll();
todos.forEach(function (todo) { return console.log("".concat(todo.name, " [").concat(model_1.Todostate[todo.state], "]")); });
