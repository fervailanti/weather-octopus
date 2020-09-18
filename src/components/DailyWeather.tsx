import React, { FC, ReactElement } from 'react'
import { DailyForecastType, DayType } from '../helpers/types'
import Day from './Day'

interface DailyWeatherProps {
  dailyForecast: DailyForecastType
}

const DailyWeather: FC<DailyWeatherProps> = ({ dailyForecast }): ReactElement => (
  <div className="flex justify-around h-full items-center flex-wrap mt-6 border-t">
    {dailyForecast.map((day: DayType, index: number) => (
      <Day date={day.date} weather={day.weather} key={index} />
    ))}
  </div>
)

export default DailyWeather
