import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {FilterTypes} from '../../constants';
//动画
import {spring, TransitionMotion} from 'react-motion';

//动画进入函数
const willEnter = () => {
	return {
		opacity: 0,
		height: 0
	}
}
//动画离开函数
const willLeave = () => {
	return {
		opacity: spring(0),
		height: spring(0)
	}
}

const getStyles = (todos) => {
	return todos.map( item => {
		return {
			key: item.id.toString(),
			data: item,
			style: {
				opacity: spring(1),
				height: spring(60)
			}
		}
	})
}
class TodoList extends Component {
	render() {
		const {todos} = this.props;
		const styles = getStyles(todos);
		return (
			<TransitionMotion
				willLeave={willLeave}
				willEnter={willEnter}
				styles={styles}>
				{
					interpolatedStyles => {
						return <ul className="todo-list">
							{
								interpolatedStyles.map(config => {
									const { style, data, key} = config;
									const item = data;
									return (<TodoItem 
										key={key}
										id={item.id}
										style={style}
										text={item.text}
										completed={item.completed}
									/>)
								})
							}
						</ul>
					}
				}
			</TransitionMotion>
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

