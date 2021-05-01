import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../src/App';
import { TodoList } from '../src/TodoList';
// import <Component> from '<insert file path>';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
	let state;
	let props;
	let mockToggleComplete = jest.fn();

	beforeEach(() => {
		state = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
			{ text: 'test', complete: false },
		];
		props = {
			todos: [
				{ text: 'Walk the dog', complete: true },
				{ text: 'Make app', complete: false },
				// { text: 'test', complete: false },
			],
			toggleComplete: mockToggleComplete,
		};
	});

	describe('App component', () => {
		it('Shallow rendering', () => {
			const wrapper = shallow(<App />);
		});

		// Insert assertions for component's expected rendering here
		it('includes a header', () => {
			const wrapper = shallow(<App />);
			expect(wrapper.find('h2').length).toEqual(1);
		});

		// Optional: Test rendering of React Components
		// it('App has TodoList and AddTodoForm as children', () => {
		// 	const wrapper = shallow(<App />);
		// 	expect(wrapper.children()).to.have.lengthOf(2);
		// });

		it('includes two list items', () => {
			const wrap = mount(<TodoList {...props} />);
			expect(wrap.find('li').length).toEqual(props.todos.length);
		});

		// xit('includes two paragraphs', () => {
		// 	const wrapper = shallow(<App />);
		// 	expect(wrapper.find('p').length).toEqual(2);
		// });

		it('<element> should update state on click', () => {
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

	// describe('App component', () => {
	// 	it('Shallow rendering', () => {
	// 		const wrapper = shallow(<App someProp={1} />);
	// 		const componentInstance = wrapper.instance();
	// 		//Accessing react lifecyle methods
	// 		componentInstance.componentDidMount();
	// 		componentInstance.componentWillMount();
	// 		//Accessing component state
	// 		//Accessing component props
	// 		expect(wrapper.props.someProp).toEqual(1);
	// 		//Accessing class methods
	// 		expect(componentInstance.counter(1)).toEqual(2);
	// 	});
	// });

	// describe('LabeledText', () => {
	// let wrapper;
	// const props = {
	// 	todo: 'Write a test',
	// };

	// beforeAll(() => {
	// 	wrapper = shallow(<TodoListItem {...props} />);
	// });

	// it('works', () => {
	// expect(wrapper.text()).toEqual('Write a test');
	// });
	// });
});
