import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddTodoForm } from './AddTodoForm'

const addTodo = jest.fn()

describe('AddTodoForm', () => {
    test('should render correctly', () => {
        render(<AddTodoForm addTodo={addTodo} />)
        expect(screen.getByText('Add Todo')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    test('calls the AddTodo callback handler', async () => {
        render(<AddTodoForm addTodo={addTodo} />)

        await userEvent.type(screen.getByRole('textbox'), 'New Todo')
        await userEvent.click(screen.getByText('Add Todo'))

        expect(addTodo).toHaveBeenCalledWith('New Todo')
    })
})