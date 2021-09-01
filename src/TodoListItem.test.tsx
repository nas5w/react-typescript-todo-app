import { render, screen, fireEvent } from '@testing-library/react'
import { TodoListItem } from './TodoListItem'
import { Todo } from './types'

describe('TodoListItem', () => {
    test('calls the toggleComplete callback handler', async () => {
        const todo: Todo = {
          text: 'cook',
          complete: false
        }
        const toggleComplete = jest.fn()

        render(<TodoListItem todo={todo} toggleComplete={toggleComplete} />)

        fireEvent.click(screen.getByTestId('todo-item-complete-check'))

        expect(toggleComplete).toHaveBeenCalledWith(todo)
    })
})