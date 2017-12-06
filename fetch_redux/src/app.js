import React from 'react';
import {view as City} from './city/';
import {view as Weather} from './view/';
import Count from './HOC/'

const App = () => {
	return (
		<div>
			<City />
			<Weather />
			<Count />
		</div>
	);
}
export default App
