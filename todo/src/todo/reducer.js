import {ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM} from './actionTypes';

export default (state = [] , action) => {
	switch (action.type) {
		case ADD_ITEM: {
			return [
				{
					id: action.id,
					text: action.text,
					completed: false
				},
				...state
			]
		}
		case TOGGLE_ITEM: {
			return state.map( item => {
				if (item.id === action.id) {
					return {...item, completed: !item.completed}
				} else {
					return item;
				}
			})
		}
		case REMOVE_ITEM: {
			return state.filter( item => {
				//过滤非action.id的所有item
				return item.id !== action.id;
			})
		}
		default:
			return state;
	}
}
