import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CurrentWeather from '../CurrentWeather'

describe('CurrentWeather Container', () => {
  // Complex to test because of it's nature.
  // At least, it should render without explode with inital states.
  it('Should render correctly', () => {
    const currentWeather = render(<CurrentWeather />)
    expect(currentWeather.container).toMatchSnapshot()
  })
})
