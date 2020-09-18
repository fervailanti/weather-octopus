import axios from 'axios'
import { CoordType } from '../helpers/types'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export const getWeather = {
  byCityId: async (
    cityId: number,
    callback: (data: any) => void
  ) => {
    await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        id: cityId,
        units: 'metric',
        appid: API_KEY
      }
    })
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  },
  byGeolocation: async (
    geolocation: CoordType,
    callback: (data: any) => void
  ) => {
    await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: geolocation.lat,
        lon: geolocation.lon,
        units: 'metric',
        appid: API_KEY
      }
    })
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  }
}

export const getForecast = {
  byGeolocation: async (
    geolocation: CoordType,
    callback: (data: any) => void
  ) => {
    await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
      params: {
        lat: geolocation.lat,
        lon: geolocation.lon,
        exclude: 'current,hourly,minutely',
        units: 'metric',
        appid: API_KEY
      }
    })
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  }
}