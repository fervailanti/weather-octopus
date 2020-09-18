import React, { FC, ReactElement, useEffect, useState, useContext, useCallback } from 'react'
import Forecast from '../components/Forecast'
import { getForecast, getWeather } from '../services/openWeather'
import { PinnedCityContext } from '../providers/PinnedCity'
import { createFromApi } from '../helpers/methods/createFromApi'
import { initWeather } from '../helpers/constans/initWeather'

const OthersWeather: FC = (): ReactElement => {
  const { pinnedCity, setPinnedCity } = useContext(PinnedCityContext)
  const [city, setCity] = useState(initWeather.city)
  const [dailyForecast, setDailyForecast] = useState(initWeather.dailyForecast)

  const refreshWeather = useCallback(async () => {
    setPinnedCity({ type: 'loading', loading: true })
    await getWeather.byCityId(pinnedCity.id, (data) => {
      setCity(createFromApi.city(data))
    })
    await getForecast.byGeolocation(pinnedCity.coord, (data) => {
      setDailyForecast(createFromApi.dailyForecast(data))
    })
    setPinnedCity({ type: 'loading', loading: false })
  }, [pinnedCity.id, pinnedCity.coord, setPinnedCity])

  useEffect(() => {
    refreshWeather()
  }, [pinnedCity.id, refreshWeather])

  return (
    <Forecast
      title="Pinned city 📌"
      city={city}
      dailyForecast={dailyForecast}
      action={refreshWeather}
      isLoading={pinnedCity.isLoading}
      gradient={{ from: 'red-900', to: 'teal-900' }}
      id="pinned-city-forecast"
    />
  )
}

export default OthersWeather
