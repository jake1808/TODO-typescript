import {Todo, Todostate} from './model';
import {TodoService} from './DataAccess'

let service = new TodoService([]);

service.add({
    id:1,
    name: 'Pick up laundry',
    state: Todostate.NEW
});

let todos = service.getAll();
todos.forEach(todo=>console.log(`${todo.name} [${Todostate[todo.state]}]`))