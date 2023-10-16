import React from 'react';
import { useSelector } from 'react-redux';
import {StatusFilter} from './StatusFilters';

const Footer =() => {

    const todosRemaining = useSelector(state =>{

        const uncompletedTodos = state.todos.filter(todo => !todo.completed)
        return uncompletedTodos.length;
    })

    const {status,color} = useSelector(state=>state.filters)

    return (
        <footer >
            <div>
            <h5>Actions</h5>
            <button>Mark All Completed</button>
            <button>Clear Completed</button>
            </div>

            <RemainingTodos count={todosRemaining} />
            <StatusFilter value={status} onChange={onStatusChnage} />
            <ColorFilters value={colors} onChange={onColorChange} />

            

        </footer>
    )
}
export default Footer;
 