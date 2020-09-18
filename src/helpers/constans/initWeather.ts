import { images } from "../../images"
import { CityType, DailyForecastType } from "../types"

export const initWeather: {
  city: CityType
  dailyForecast: DailyForecastType
} = {
  city: {
    id: 0,
    name: 'Unknow',
    country: 'Unknow',
    time: '00:00',
    weather: {
      description: 'Unknow weather description',
      icon: images.weather.icons.forecast,
      temp: {
        current: 0,
        min: 0,
        max: 0
      }
    }
  },
  dailyForecast: Array(5).fill({
    date: 'Unknow dailys',
    weather: {
      icon: images.weather.icons.forecast,
      temp: {
        min: 0,
        max: 0
      }
    }
  })
}