import React from 'react';
import CountDown from './CountDown'
const Count = () => {
	return (
		<div>
			<CountDown defaultCount={10}>
				{
					(count) => {
						return <div>{count > 0 ? `${count}秒` : '新年快乐'}</div>
					}
				}
			</CountDown>
		</div>
	);
}
export default Count;
