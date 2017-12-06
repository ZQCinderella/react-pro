import React from 'react';
import AddItem from './addTodo';
import TodoList from './todoList';
import './style.css'
export default () => {
	return (
		<div className="todos">
			<AddItem />
			<TodoList />
		</div>
	)
}
