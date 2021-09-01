import { render, screen, fireEvent } from '@testing-library/react'
import { TodoList } from './TodoList'
import { Todo } from './types'

const todos: Todo[] = [{
  text: 'cook',
  complete: false
}, {
  text: 'play basketball',
  complete: true
}]

describe('TodoList', () => {

  test('should be render 2 todos', () => {
    const toggleComplete = jest.fn()

    render(<TodoList todos={todos} toggleComplete={toggleComplete} />)

    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
    expect(screen.getByTestId('todo-list').children.length).toBe(2)
    expect(Array.isArray(screen.getAllByTestId('todo-item'))).toBe(true)
    expect(screen.getAllByTestId('todo-item')[0]).toHaveTextContent('cook')
    expect(screen.getAllByTestId('todo-item')[1]).toHaveTextContent('play basketball')
  })
})