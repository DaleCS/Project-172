import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, toggleTodo}) => {
    return (
            todos.map(todo =>{
                return <TodoListItem key = {todo.id} todo = {todo} toggleTodo = {toggleTodo} />
            })
    )
}

export default TodoList
