
    export enum Todostate{
    NEW =1,
    ACTIVE,
    COMPLETED,
    DELETED
}


    export interface Todo{
    id: number;
    name:string;
    state:Todostate;
}

