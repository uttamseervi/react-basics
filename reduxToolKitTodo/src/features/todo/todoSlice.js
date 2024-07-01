import { createSlice, nanoid } from "@reduxjs/toolkit";

// what will be the initial state of the store
//what will be there in the store initially
// initial state can be anything it can be array or the objects;
const initialState = {
    todos: [{ id: 1, text: "this is the first todo" }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        /*
        state and action are the part of syntax so please do remember them 
        action is the object which is created by the user
        the difference btw the contextApi and redux is there we only declare the function here we define the function also
        and one more thing we can define the function outside also and can give the reference
        the method when we define it has two parameters state and action
        the state will give the value of things what all there in the states initially it is initialState only later it will change
        usage of  action lets say i want to delete the todo to delete it i need its id to get the id of that particular todo we use the action
        */
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                /*text: action.payload.text its the same bcz iam sending it as text only so i dont need to write it again,*/
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload.id))
        },
        /* Home work update todo and delete todo*/
    }
})
// exporting the individual functionalities so that we can directly use them
export const { addTodo, removeTodo } = todoSlice.actions;
/*this export is for the store. Store will not accept the data from everyone and then alter the data
we should give the awareness to store about the reducers so that the store can only accept the data from these reducers only "like we are registering the reducers to the store"
*/
export default todoSlice.reducer
/*
we cannot export the todoSlice directly we need to do it in steps 
we need to export it in 2 parts one : are the functionalities of the slice and another one is the slice this is the syntax so remember it 
*/