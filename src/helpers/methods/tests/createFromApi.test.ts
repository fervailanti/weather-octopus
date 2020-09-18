import { images } from '../../../images'
import { createFromApi } from '../createFromApi'
import { resolveTimezone } from '../resolveTimezone'

const cityMocks = {
  input: {
    id: 1234,
    name: 'Madrid',
    sys: {
      country: 'ES'
    },
    timezone: 7200,
    weather: [
      {
        description: 'clear sky',
        icon: '01d'
      }
    ],
    main: {
      temp: 22.34,
      temp_min: 18.12,
      temp_max: 24.63
    }
  },
  output: {
    id: 1234,
    name: 'Madrid',
    country: 'Spain',
    time: resolveTimezone(7200),
    weather: {
      description: 'clear sky',
      icon: images.weather.icons.sun,
      temp: {
        current: 22,
        min: 18,
        max: 25
      },
    }
  }
}

const dailyForecastMocks = {
  input: {
    daily: Array(7).fill({
      dt: 1600862400,
      weather: [
        {
          icon: '01d'
        }
      ],
      temp: {
        min: 24.73,
        max: 28.32
      }
    })
  },
  output: Array(5).fill({
    date: 'Wednesday 23rd',
    weather: {
      icon: images.weather.icons.sun,
      temp: {
        min: 25,
        max: 28
      }
    }
  })
}

describe('Helper method createFromApi', () => {

  it('Should format city data correctly', () => {
    expect(createFromApi.city(cityMocks.input)).toStrictEqual(cityMocks.output)
  })

  it('Should format daily forecast data correctly', () => {
    expect(createFromApi.dailyForecast(dailyForecastMocks.input)).toStrictEqual(dailyForecastMocks.output)
  })
})