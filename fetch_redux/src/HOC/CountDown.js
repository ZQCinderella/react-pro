import React , {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class CountDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.defaultCount
		}
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			let count = this.state.count - 1;
			if (count >= 0) {
				this.setState({
					count: count
				});
			} else {
				//结束
				window.clearInterval(this.timer);
			}
		}, 1000)	
  }
	render() {
		const {count} = this.state;
		return (
			<div>
				{
					this.props.children(count)
				}
			</div>
		);
	}
}
CountDown.propTypes = {
	children: PropTypes.func.isRequired
}
export default CountDown;
