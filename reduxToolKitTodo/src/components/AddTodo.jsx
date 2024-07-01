import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from "../features/todo/todoSlice"
function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    /* what does dispatch do 
    firstly dispatch is the function of react-redux library not of the core redux  
    dispatch uses one reducer to make changes in the store

*/
    const addTodoHandler = (e) => {
        e.preventDefault()
        /*Earlier we had to write the action.Payload manually now we can just give the some input directly and it will recognize it {why action.payload for that refer the todoSLice there we are taking the value for the todo using action.Payload and now here we are passing the value to the action.Payload}*/
        dispatch(addTodo(input))
        setInput('') 
        //the above line is to clean the input after the todo is submitted otherwise the todo will be there only and to remove it we have to do backspace
    }


    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
