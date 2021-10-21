import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

describe('snapshot test', ()=>{
	test('testing omdb react app', () => {
		let tree = create(<App />)
		expect(tree.toJSON()).toMatchSnapshot();
	})
})