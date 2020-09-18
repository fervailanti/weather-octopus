import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react'
import Forecast from '../components/Forecast'
import { usePosition } from 'use-position'
import { getForecast, getWeather } from '../services/openWeather'
import { createFromApi } from '../helpers/methods/createFromApi'
import { initWeather } from '../helpers/constans/initWeather'

const CurrentWeather: FC = (): ReactElement => {
  const { latitude: lat, longitude: lon } = usePosition(false)
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState(initWeather.city)
  const [dailyForecast, setDailyForecast] = useState(initWeather.dailyForecast)

  const refreshWeather = useCallback(async () => {
    setIsLoading(true)
    await getWeather.byGeolocation({ lat, lon }, (data) => {
      setCity(createFromApi.city(data))
    })
    await getForecast.byGeolocation({ lat, lon }, (data) => {
      setDailyForecast(createFromApi.dailyForecast(data))
    })
    setIsLoading(false)
  }, [lat, lon])

  useEffect(() => {
    lat && lon && refreshWeather()
  }, [lat, lon, refreshWeather])

  return (
    <Forecast
      title="Your current location 📍"
      city={city}
      dailyForecast={dailyForecast}
      action={refreshWeather}
      isLoading={isLoading}
      gradient={{ from: 'orange-900', to: 'blue-900' }}
    />
  )
}

export default CurrentWeather
