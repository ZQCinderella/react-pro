import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './actionType';

//请求刚开始
const fetchStart = () => {
	return {
		type: FETCH_START
	}
}
//请求成功
const fetchSuccess = (result) => {
	return {
		type: FETCH_SUCCESS,
		result
	}
}
//请求失败
const fetchFailure = (error) => {
	return {
		type: FETCH_FAILURE,
		error
	}
}

let nextId = 0;
export const fetchWeather = (code) => {
	return (dispatch) => {
		const api = `/data/cityinfo/${code}.html`;
		const seqId = ++ nextId;
		//利用闭包的特性，给每一个请求加一个唯一标识， 如果和全局的标识不一样，即表明在请求响应之前，用户发起了另一个请求，则舍弃本次的
		const dispatchValid = (action) => {
			if (seqId === nextId) {
				return dispatch(action);
			}
		}
		dispatchValid(fetchStart());
		fetch(api).then(response => {
			if (!response === 'ok' || response.status !== 200) {
				throw new Error('fail to get info with status' + response.status);
			}
			response.json().then(json => {
				console.log(json.weatherinfo);
				dispatchValid(fetchSuccess(json.weatherinfo));
			}).catch(err => {
				console.log('不是完整的json，可能是刚接收到请求头');
				dispatchValid(fetchFailure(err));
			})
		}).catch(err => {
			console.log('网络错误');
		})
	}
}

