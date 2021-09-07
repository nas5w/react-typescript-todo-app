import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import { User } from './User'

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.json({name: 'James'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays username', async () => {
  render(<User />)
  await waitFor(() => {
    expect(screen.getByTestId('username')).toHaveTextContent('James')
  });
})