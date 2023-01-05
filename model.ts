enum Todostate{
    NEW =1,
    ACTIVE,
    COMPLETED,
    DELETED
}

interface Todo{
    id: number;
    name:string;
    state:Todostate;
}

interface ITodoService{
    add(todo:Todo):Todo;
    delete(todoId:number): void;
    getAll():Todo[];
    getById(todoId: number): Todo;
}
