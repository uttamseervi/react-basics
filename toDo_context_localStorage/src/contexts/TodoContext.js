import React, { useContext, useState, createContext } from "react";
import { createElement } from "react";
//this is efficient and easy method for context creation
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

});

// this is a hook
export const useTodo = () => {
    return useContext(TodoContext);
}
// context provider
export const TodoProvider = TodoContext.Provider