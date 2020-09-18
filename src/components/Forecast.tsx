import React, { FC, ReactElement } from 'react'
import { DailyForecastType, CityType } from '../helpers/types'
import { images } from '../images'
import CityWeather from './CityWeather'
import DailyWeather from './DailyWeather'
import WithLoader from './WithLoader'

interface ForecastProps {
  gradient: {
    from: string
    to: string
  }
  title: string
  city: CityType
  dailyForecast: DailyForecastType
  action?: () => void
  isLoading?: boolean
  id?: string
}

const Forecast: FC<ForecastProps> = ({
  gradient,
  title,
  city,
  dailyForecast,
  action,
  isLoading,
  id
}): ReactElement => {
  const sizing = 'w-full h-full max-w-screen-md m-2 p-4 lg:p-6'
  const transition = 'transition duration-200 ease-in-out'
  const hover = 'lg:cursor-pointer transform lg:hover:scale-105'
  const active = 'active:opacity-75'
  const background = `bg-gradient-to-r from-${gradient.from} to-${gradient.to}`

  const { name, country, time, weather } = city

  return (
    <div className="flex flex-col items-center md:m-4 w-full">
      <p className="text-white font-thin text-2xl my-3">{title}</p>
      <div
        className={`group shadow-xl rounded-lg ${sizing} ${transition} ${hover} ${active} ${background}`}
        onClick={action}
        id={id}
      >
        <WithLoader isLoading={isLoading} className="flex flex-col h-full">
          <img
            alt="reload-icon"
            className={`h-6 absolute right-0 mr-5 opacity-0 lg:group-hover:opacity-100 ${transition}`}
            src={images.common.reload}
          />
          <CityWeather name={name} country={country} time={time} weather={weather} />
          <DailyWeather dailyForecast={dailyForecast} />
        </WithLoader>
      </div>
    </div>
  )
}

export default Forecast
