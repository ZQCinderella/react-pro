import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {FilterTypes} from '../../constants';


class TodoList extends Component {
	render() {
		console.log('list change');
		const {todos} = this.props;
		return (
			<ul className="todo-list">
				{
					todos.map(item => {
						return <TodoItem 
							key={item.id}
							id={item.id}
							{...item}
						/>
					})
				}
			</ul>
		);
	}
}
TodoList.propTypes = {
	todos: PropTypes.array.isRequired
}
const getState = (todos = [], filter) => {
	switch (filter) {
		case FilterTypes.ALL:
			return todos;
		case FilterTypes.COMPLETED:
			return todos.filter(item => item.completed)
		case FilterTypes.UNCOMPLETED: 
			return todos.filter(item => !item.completed)
		default:
			return todos;
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getState(state.todos, state.filter) 
	}
}
export default connect(mapStateToProps, null)(TodoList)

