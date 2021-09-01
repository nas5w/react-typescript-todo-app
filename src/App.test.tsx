import { render, screen, fireEvent } from '@testing-library/react'
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
    // toggle on
    fireEvent.click((screen.getAllByTestId('todo-item-complete-check'))[1])
    expect((screen.getAllByTestId('todo-item-complete-check')[1] as HTMLInputElement).checked).toBe(true)
  })
})