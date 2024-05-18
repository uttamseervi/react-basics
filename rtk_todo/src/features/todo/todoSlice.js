// nanoid is only used to create unique id's
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: "todo or it can be anything",
    initialState, //we can define the initial state here or we can declare it outside also as it is done above
    reducers: {
        // in context api we used to only declare the methods but not their functionality but 
        // here in redux we define the functionality here itself
        // this is the syntax
        // whenever we use addTodo() we get access for two things {state,action} this is the syntax its not user defined
        // state: gives the access to the variables of the initial state or it gives the access of current
        // action: by an example if we want delete a todo we need its id so to get that id we need action 
        // and if we want to access the value from the action we use action.payload payLoad is itself an object
        // or action gives the access of current data
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            // the above line is to push the todo's into the state
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== todo.payload.id)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.action
export default todoSlice.reducer