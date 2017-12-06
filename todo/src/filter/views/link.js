import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {setFilter} from '../actions';

const Link = ({onClick, active, children}) => {
	if (active) {
		return <b className="filter selected">{children}</b>
	} else {
		return (
			<a href="#" className="filter not-selected" onClick={ (e) => {
				e.preventDefault();
				onClick();
			}}>
			{children}
			</a>
		)
	}
}
Link.propTypes = {
	onClick: PropTypes.func.isRequired,
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired
}
const mapStateToProps = (state, props) => {
	return {
		active: state.filter === props.filter
	}
}
const mapDispatchToProps = (dispatch, props) => ({
	onClick: () => {
		dispatch(setFilter(props.filter))
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(Link)
