import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../src/App';
import { TodoList } from '../src/TodoList';
import { TodoListItem } from '../src/TodoListItem';
// import <Component> from '<insert file path>';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
	let props;
	let mockToggleComplete = jest.fn();

	describe('App Component', () => {
		it('Shallow rendering', () => {
			const wrapper = shallow(<App />);
		});

		it('should update state on click', () => {
			const updateState = jest.fn();
			const wrapper = mount(<App onClick={updateState} />);
			const handleClick = jest.spyOn(React, 'useState');
			handleClick.mockImplementation((size) => [size, updateState]);

			// Specify element type and index to test state change
			// wrapper.find(<element type>).at(1).simulate('click');
			wrapper.find('input').at(1).simulate('click');
			expect(updateState).toBeTruthy();
		});
	});

	describe('TodoList Component', () => {
		beforeEach(() => {
			props = {
				todos: [
					{ text: 'Walk the dog', complete: true },
					{ text: 'Make app', complete: false },
					// { text: 'test', complete: false },
				],
				toggleComplete: mockToggleComplete,
			};
		});

		it('includes two list items', () => {
			const wrap = mount(<TodoList {...props} />);
			expect(wrap.find('li').length).toEqual(props.todos.length);
		});
	});

	describe('TodoListItem Component', () => {
		beforeEach(() => {
			props = {
				todo: { text: 'Walk the dog', complete: true },
				toggleComplete: mockToggleComplete,
			};
		});

		it('contains input (checkbox)', () => {
			const wrap = mount(<TodoListItem {...props} />);
			expect(wrap.find('input').length).toEqual(1);
		});
	});
});
