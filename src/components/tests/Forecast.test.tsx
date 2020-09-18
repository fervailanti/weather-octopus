import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Forecast from '../Forecast'
import { images } from '../../images'
import { CityType } from '../../helpers/types'

const mockCity: CityType = {
  id: 1000,
  name: 'New York',
  country: 'USA',
  time: '3:25 PM',
  weather: {
    description: 'clear sky',
    icon: images.weather.icons.forecast,
    temp: {
      current: 20,
      min: 18,
      max: 22
    }
  }
}

const mockDailyForecast = Array(5).fill({
  date: 'Monday 20th',
  weather: {
    icon: images.weather.icons.forecast,
    temp: {
      min: 16,
      max: 19
    }
  }
})

describe('Forecast Component', () => {
  it('Should render correctly and execute action passed by props', () => {
    const dummyAction = jest.fn()
    const forecast = render(
      <Forecast
        title="Hi! I'm a Forecast"
        city={mockCity}
        dailyForecast={mockDailyForecast}
        action={dummyAction}
        isLoading={false}
        gradient={{ from: 'red-900', to: 'teal-900' }}
        id="test-forecast-mock"
      />
    )
    expect(forecast.container).toMatchSnapshot()
    fireEvent.click(screen.getByText('New York'))
    expect(dummyAction).toHaveBeenCalledTimes(1)
  })
})
