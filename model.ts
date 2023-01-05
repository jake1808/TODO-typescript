namespace TodoApp.Model{
    export enum Todostate{
    NEW =1,
    ACTIVE,
    COMPLETED,
    DELETED
}
}
namespace TodoApp.Model{
    export interface Todo{
    id: number;
    name:string;
    state:Todostate;
}
}
