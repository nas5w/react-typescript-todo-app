// Initial describe statement for default initialized state
describe('default state', () => {
	let state;

	beforeEach(() => {
		state = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		];
	});

	it('should return a default state when given an undefined input', () => {
		expect(state[0]).toEqual({ text: 'Walk the dog', complete: true });
		expect(state[1]).toEqual({ text: 'Make app', complete: false });
		expect(state).toEqual([
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		]);
	});
});

// Added a todo!
describe('state changed!', () => {
	let prevState, currState, stateDiff;

	beforeEach(() => {
		prevState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		];
		currState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: true },
		];
		stateDiff = { added: {}, deleted: {}, updated: { 1: { complete: true } } };
	});

	it('prevMemoizedState should not equal currMemoizedState', () => {
		expect(prevState).not.toEqual(currState);
	});
	it('should useStateHook variable where component changed', () => {
		expect(currState).toEqual([
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: true },
		]);
		expect(stateDiff).toEqual({
			added: {},
			deleted: {},
			updated: { 1: { complete: true } },
		});
	});
});
//
// Added a todo!
describe('state changed!', () => {
	let prevState, currState, stateDiff;

	beforeEach(() => {
		prevState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: true },
		];
		currState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		];
		stateDiff = { added: {}, deleted: {}, updated: { 1: { complete: false } } };
	});

	it('prevMemoizedState should not equal currMemoizedState', () => {
		expect(prevState).not.toEqual(currState);
	});
	it('should useStateHook variable where component changed', () => {
		expect(currState).toEqual([
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		]);
		expect(stateDiff).toEqual({
			added: {},
			deleted: {},
			updated: { 1: { complete: false } },
		});
	});
});
//
// Added a todo!
describe('state changed!', () => {
	let prevState, currState, stateDiff;

	beforeEach(() => {
		prevState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
		];
		currState = [
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
			{ text: 'test', complete: false },
		];
		stateDiff = {
			added: { 2: { text: 'test', complete: false } },
			deleted: {},
			updated: {},
		};
	});

	it('prevMemoizedState should not equal currMemoizedState', () => {
		expect(prevState).not.toEqual(currState);
	});
	it('should useStateHook variable where component changed', () => {
		expect(currState).toEqual([
			{ text: 'Walk the dog', complete: true },
			{ text: 'Make app', complete: false },
			{ text: 'test', complete: false },
		]);
		expect(stateDiff).toEqual({
			added: { 2: { text: 'test', complete: false } },
			deleted: {},
			updated: {},
		});
	});
});
//
