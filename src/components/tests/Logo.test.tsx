import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Logo from '../Logo'

describe('Logo Component', () => {
  it('Should render correctly and execute action passed by props', () => {
    const dummyAction = jest.fn()
    const logo = render(<Logo action={dummyAction} />)
    expect(logo.container).toMatchSnapshot()
    expect(logo.container).toHaveTextContent('WeatherOctopus')
    fireEvent.click(screen.getByTestId('octopus-logo'))
    expect(dummyAction).toHaveBeenCalledTimes(1)
  })
})
