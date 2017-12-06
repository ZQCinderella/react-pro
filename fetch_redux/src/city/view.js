import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { action } from '../view/';

const CITY_CODE = {
	'北京': 101010100,
	'上海': 101020100,
	'广州': 101280101,
	'深圳': 101280601,
	'石家庄': 101090101
}
class City extends React.Component {
	cityChange = (e) => {
		e.preventDefault();
		const code = e.target.value;
		this.props.onSelectCity(code);
	}
	componentDidMount() {
		//默认请求
		const defaultCode = CITY_CODE[Object.keys(CITY_CODE)[0]];
		this.props.onSelectCity(defaultCode);
	}
	render() {
		return (
			<select onChange={this.cityChange}> 
				{
					Object.keys(CITY_CODE).map( item => {
						return <option key={item} value={CITY_CODE[item]}>{item}</option> 
					})
				}
			</select>
		);
	}
}
City.propTypes = {
	onSelectCity: PropTypes.func.isRequired
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSelectCity: (code) => {
			dispatch(action.fetchWeather(code))
		}
	}
}

export default connect(null, mapDispatchToProps)(City);

