import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { images } from '../../images'
import DailyWeather from '../DailyWeather'
import { DailyForecastType } from '../../helpers/types'

const mockDailyForecast: DailyForecastType = Array(5).fill({
  date: 'Monday 20th',
  weather: {
    icon: images.weather.icons.forecast,
    temp: {
      min: 16,
      max: 19
    }
  }
})

describe('DailyWeather Component', () => {
  it('Should render correctly', () => {
    const daily = render(<DailyWeather dailyForecast={mockDailyForecast} />)
    expect(daily.container).toMatchSnapshot()
    expect(daily.container).toHaveTextContent('Monday 20th')
    expect(daily.container).toHaveTextContent('16º / 19º')
  })
})
