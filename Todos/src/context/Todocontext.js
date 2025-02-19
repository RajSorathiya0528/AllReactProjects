import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {  
            id : 1,
            todoMsg : "Hello world",
            comlpeted : false 
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    toggalTodo : (id) => {}
});

export const useTodo = () => {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider;