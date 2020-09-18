import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { images } from '../../images'
import CityWeather from '../CityWeather'

describe('CityWeather Component', () => {
  it('Should render correctly', () => {
    const city = render(
      <CityWeather
        name="New York"
        country="USA"
        time="3:25 PM"
        weather={{
          icon: images.weather.icons.sun,
          description: 'clear sky',
          temp: { current: 14, min: 12, max: 15 }
        }}
      />
    )
    expect(city.container).toMatchSnapshot()
    expect(city.container).toHaveTextContent('New York, USA')
    expect(city.container).toHaveTextContent('As of 3:25 PM')
    expect(city.container).toHaveTextContent('12º / 15º')
    expect(city.container).toHaveTextContent('14º')
  })
})
