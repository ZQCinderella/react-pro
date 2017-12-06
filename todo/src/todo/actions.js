import { ADD_ITEM, TOGGLE_ITEM, REMOVE_ITEM } from './actionTypes';

let id = 0;

//参数为要添加的数据
export const add_item = (text) => {
	console.log(text);
	return {
		type: ADD_ITEM,
		text: text,
		id: id++,
		completed: false
	}
}
export const toggle_item = (id) => {
	return {
		type: TOGGLE_ITEM,
		id: id
	}
}
export const remove_item = (id) => {
	return {
		type: REMOVE_ITEM,
		id: id
	}
}
