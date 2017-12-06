import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as Status from './status';

const Weather = (props) => {
	const {status, city, weather, temp1, temp2} = props;
	switch(status) {
		case Status.LOADING:
			return <div>天气信息请求中</div>
		case Status.SUCCESS: 
			return <div>城市：{city} 天气：{weather} 最高气温：{temp2} 最低气温：{temp1}</div>
		case Status.FAILURE:
			return <div>请求出错</div>
		default:
			return <div>天气信息请求中</div>
	}
	return <div>123</div>
}
Weather.propTypes = {
	status: PropTypes.string.isRequired,
	city: PropTypes.string,
	weather: PropTypes.string,
	temp1: PropTypes.string,
	temp2: PropTypes.string,
}
Weather.defaultProps = {
	status: 'loading'
}
const mapStateToProps = (state) => {
	const { status, city, weather, temp1, temp2 } = state.weather;
	return {
		status,
		city,
		weather,
		temp1,
		temp2
	}
} 
export default connect(mapStateToProps, null)(Weather);
