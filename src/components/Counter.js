import React from 'react';

export const Counter = props => {
	return (
		<div>
			<h2>{props.count}</h2>
			<button id='inc' onClick={props.addOne}>
				Add One
			</button>
			<button id='dec' onClick={props.minusOne}>
				Minus One
			</button>
			<div>
				<button id='getfact' onClick={props.getFact}>
					Get a fact!
				</button>
			</div>
		</div>
	);
};
