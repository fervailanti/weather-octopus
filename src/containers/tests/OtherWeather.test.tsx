import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OtherWeather from '../OtherWeather'

describe('OtherWeather Container', () => {
  // Complex to test because of it's nature.
  // At least, it should render without explode with inital states.
  it('Should render correctly', () => {
    const otherWeather = render(<OtherWeather />)
    expect(otherWeather.container).toMatchSnapshot()
  })
})
