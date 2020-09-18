import { resolveCountry } from './resolveCountry'
import { resolveDate } from './resolveDate'
import { resolveTimezone } from './resolveTimezone'
import { resolveWeatherIcon } from './resolveWeatherIcon'

export const createFromApi = {
  city: (data: any) => ({
    id: data.id,
    name: data.name,
    country: resolveCountry(data.sys?.country),
    time: resolveTimezone(data.timezone),
    weather: {
      description: data.weather[0]?.description,
      icon: resolveWeatherIcon(data.weather[0]?.icon),
      temp: {
        current: Math.round(data.main?.temp),
        min: Math.round(data.main?.temp_min),
        max: Math.round(data.main?.temp_max)
      },
    }
  }),
  dailyForecast: (data: any) => {
    return data.daily.slice(1, 6).map((day: any) => ({
      date: resolveDate(day.dt),
      weather: {
        icon: resolveWeatherIcon(day.weather[0]?.icon),
        temp: {
          min: Math.round(day.temp.min),
          max: Math.round(day.temp.max)
        }
      }
    }))
  }
}