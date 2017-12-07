import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {FilterTypes} from '../../constants';

import {spring, TransitionMotion} from 'react-motion';

const willLeave = () => {
  return {
    height: spring(0),
    opacity: spring(0)
  };
}

const willEnter = () => {
  return {
    height: 0,
    opacity: 0
  };
};
const getStyles = (todos) => {
  return todos.map(item => {
    return {
      key: item.id.toString(),
      data: item,
      style: {
        height: spring(60),
        opacity: spring(1)
      }
    };
  });
}
class TodoList extends Component {
	render() {
		const {todos} = this.props;
		const styles = getStyles(todos);
		//style是height:60 opacity:1,  而default是height:0, opacity:0 所以刚加载时会有一个动画的过程
		//因为item应用了style，动画由default --》style
		const defaultStyle = todos.map(item => {
			return {
				key: item.id.toString(),
				data: item,
				style: {
					height: spring(0),
					opacity: spring(0)
				}
			};
		});
		return (
			<TransitionMotion
      willLeave={willLeave}
      willEnter={willEnter}
      styles={styles}
			defaultStyles={defaultStyle}
    >
      {
        interpolatedStyles =>
        <ul className="todo-list">
          {
            interpolatedStyles.map(config => {
              const {data, style, key} = config;

              const item = data;
              return (<TodoItem
                style={style}
                key={key}
                id={item.id}
                text={item.text}
                completed={item.completed}
              />);
            })
          }
        </ul>
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
export default connect(mapStateToProps)(TodoList)

