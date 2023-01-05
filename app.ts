interface Todo{
    name:string;
    completed:boolean;
}

interface ITodoService{
    add(todo:Todo):Todo;
    delete(todoId:number): void;
    getAll():Todo[];
    getById(todoId: number): Todo;
}

let todo:Todo = {
    name: 'Pick up laundry',
    completed: true
};