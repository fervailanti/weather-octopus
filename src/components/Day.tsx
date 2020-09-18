import React, { FC, ReactElement } from 'react'
import { DayType } from '../helpers/types'

const Day: FC<DayType> = ({ date, weather }): ReactElement => (
  <div className="flex items-center mt-4 mr-4">
    <img src={weather.icon} className="h-6 mr-2" alt="weather-icon" />
    <div>
      <p className="text-white font-thin text-sm">{date}</p>
      <p className="text-white font-thin text-sm">
        <span className="font-normal">{weather.temp.min}</span>º /{' '}
        <span className="font-normal">{weather.temp.max}</span>º
      </p>
    </div>
  </div>
)

export default Day
