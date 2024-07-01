import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice"
/*
    FOR REFERENCE ONLY 
    if you are adding into the todo list then we use the useSelector so that we can select all the values
    from the store.
    And if we want to remove anything or like we want to remove a todo then definitely need the function or the reducer to do that " and if we want to add or delete  something into the store then definitely we need the dispatch " 
*/
function Todos() {
    // syntax for the useSelector (useSelector gets the callback which have the access to state) :useSelector(() => { });
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();






    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            /*
                            POINT TO REMEMBER
                            in onclick we can only give the reference of the function we cannot call the function so that's why we write it in the callback
                            if we don't give reference then it will immediately execute which we don't want if we give the reference then it will only work on click
                            */
                            onClick={() => dispatch(removeTodo({id:todo.id}))}

                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
