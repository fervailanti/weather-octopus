import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OtherCities from '../OtherCities'

describe('CurrentWeather Container', () => {
  // Complex to test because of it's nature.
  // At least, it should render without explode and show cities correctly.
  it('Should render correctly and show cities correctly', () => {
    const otherCities = render(<OtherCities />)
    expect(otherCities.container).toMatchSnapshot()
    expect(otherCities.container).toHaveTextContent('New York')
    expect(otherCities.container).toHaveTextContent('Paris')
    expect(otherCities.container).toHaveTextContent('Rome')
    expect(otherCities.container).toHaveTextContent('Tokyo')
    expect(otherCities.container).toHaveTextContent('Berlin')
  })
})
