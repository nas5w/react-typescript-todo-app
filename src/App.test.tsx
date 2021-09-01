import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  test('should be render 2 todos', () => {
    render(<App />)
    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
    expect(screen.getByTestId('todo-list').children.length).toBe(2)
    expect(Array.isArray(screen.getAllByTestId('todo-item'))).toBe(true)
    expect(screen.getAllByTestId('todo-item')[0]).toHaveTextContent('Walk the do')
    expect(screen.getAllByTestId('todo-item')[1]).toHaveTextContent('Make app')
  })

  test('should be work correctly completed:true|false checkbox toggle button', () => {
    render(<App />)
    fireEvent.click((screen.getAllByTestId('todo-item-complete-check'))[1])
    expect((screen.getAllByTestId('todo-item-complete-check')[1] as HTMLInputElement).checked).toBe(true)
  })

  test('should be work correctly add todo button', async () => {
    render(<App />)
    await userEvent.type(screen.getByRole('textbox'), 'Read book')
    await userEvent.click(screen.getByText('Add Todo'))
    expect(screen.getByTestId('todo-list').children.length).toBe(3)
    expect((screen.getAllByTestId('todo-item-complete-check')[2] as HTMLInputElement).checked).toBe(false)
  })
})