import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { toggle_item, remove_item } from '../actions';

class TodoItem extends Component{
	/*shouldComponentUpdate(nextProps, nextState){
		return (nextProps.completed !== this.props.completed) || (nextProps.text !== this.props.text)
	}*/
	constructor(props){
		super(props);
		console.log(props.text);
  }
  hhh
	render() {
		const {style, completed, onToggle, onRemove, text } = this.props;
		const cls = completed ? 'completed' : 'uncompleted';
		const checkProp = completed ? {checked: true} : {};
		console.log(this.props.text);
		//使用了动画之后，每个item都要应用动画，所以要接受一下style属性
		return (
			<li className="todo-item" style={{
         textDecoration: completed ? 'line-through' : 'none',
         ...style
				}}>
				<input className="toggle" type="checkbox" {...checkProp} readOnly onClick={onToggle}/>
				<label className="text">{text}</label>
				<button className="remove" onClick={onRemove}>x</button>
			</li>
		);
	}
}
TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	onRemove: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggle: () => dispatch(toggle_item(props.id)),
		onRemove: () => dispatch(remove_item(props.id))
	}
}
export default connect(null, mapDispatchToProps)(TodoItem);
