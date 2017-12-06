import React from 'react';
import {Provider} from 'react-redux';
import ReactDom from 'react-dom';
import TodoApp from './TodoApp';
import store from './Store';

ReactDom.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>, document.getElementById('root'));
