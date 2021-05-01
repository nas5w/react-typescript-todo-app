import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
// import { renderHook, act } from '@testing-library/react-hooks';
import App from '../src/App';

test('tests run...', () => {
	//
	afterEach(cleanup);

	it('checkbox strikesthrough text', () => {
		const { getByTestId } = render(<App />);

		fireEvent.click(getByTestId('todos'));
	});
});
