import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

import {reducer as weatherReducer } from './view';

const win = window;
win.Perf = Perf;

const reducer = combineReducers({
	weather: weatherReducer
});

const middleWares = [thunk];
if (process.env.NODE_ENV !== 'production') {
	middleWares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
	applyMiddleware(...middleWares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);



