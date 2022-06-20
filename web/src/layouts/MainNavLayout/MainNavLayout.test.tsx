import { render } from '@redwoodjs/testing/web'

import MainNavLayout from './MainNavLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MainNavLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainNavLayout />)
    }).not.toThrow()
  })
})
