import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

//模块功能的reducer
import {reducer as todoReducer} from './todo';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf';

const reducer = combineReducers({
	todos: todoReducer,
	filter: filterReducer
});
//combineReducers的结果是，将所有reducer的执行结果汇集到一个对象中
/*
	function combine() {
		return {
			todos: [],
			filter: ''
		}
	}
*/

//是否加强
const win = window;
win.Perf = Perf;

const middlewares = [];
if(process.env.NODE_ENV !== 'production'){
	//防止reducer函数不是一个纯函数, 它会在每次派发action之后做检查，如果违反了纯函数则错误警告

	//由于小号计算资源和代码内存，所以通常不在生产环境使用
	middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
