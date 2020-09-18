import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../Button'

describe('Button Component', () => {
  it('Should render correctly', () => {
    const button = render(<Button>Test Button</Button>)
    expect(button.container).toMatchSnapshot()
  })
  it('Should execute action passed by props', () => {
    const dummyAction = jest.fn()
    render(<Button action={dummyAction}>Test Button</Button>)
    fireEvent.click(screen.getByText('Test Button'))
    expect(dummyAction).toHaveBeenCalledTimes(1)
  })
})
