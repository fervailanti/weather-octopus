import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App'

describe('App Component', () => {
  it('Should render correctly', () => {
    const app = render(<App />)
    expect(app.container).toMatchSnapshot()
  })
})
