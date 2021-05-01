import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';
import TodoList from '../src/TodoList';
import TodoListItem from '../src/TodoListItem';
// import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
	describe('TodoList component', () => {
		it('Shallow rendering', () => {
			const wrapper = shallow(<App />);
			// wrapper.setState({ text: 'Walk the dog' });
			// expect('text' in wrapper.state()).toEqual('Walk the dog');
			expect(wrapper.find(TodoList)).to.have.lengthOf(1);
		});
		// let wrapper = shallow(<App />);
		// const mockToggleComplete = jest.fn();
		// const props = {
		// 	key: 'Walk the dog',
		// 	todos: [
		// 		{ text: 'Walk the dog', complete: true },
		// 		{ text: 'Make app', complete: false },
		// 	],
		// 	toggleComplete: mockToggleComplete,
		// };

		// beforeAll(() => {
		// 	// wrapper = mount(<TodoList {...props} />);
		// 	wrapper = shallow(<TodoList />);
		// });

		xit('TodoList should display a TodoListItem', () => {
			// expect(wrapper.find(TodoListItem)).to.have.lengthOf(2);
		});

		// TODO: Test the following:
		// 1. A MarketDisplay should display all of its text props inside a
		// LabeledText component
		// xit('MarketDisplay should display all of its text props inside a LabeledText component', () => {
		// 	// Expect 4 LabeledText components
		// 	expect(wrapper.find({ label: 'Market ID' }).prop('text')).toEqual(1);
		// 	expect(wrapper.find({ label: 'Location' }).prop('text')).toEqual('LA');
		// 	expect(wrapper.find({ label: 'Cards' }).prop('text')).toEqual(3);
		// 	expect(wrapper.find({ label: '% of total' }).prop('text')).toEqual(10);
		// });
	});
});
