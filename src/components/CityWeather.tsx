import React, { FC, ReactElement } from 'react'
import { CityType } from '../helpers/types'
import Title from './Title'

const CityWeather: FC<CityType> = ({ name, country, time, weather }): ReactElement => (
  <div className="flex justify-between w-full">
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col">
        <Title text={{ main: name, side: country }} size="medium" />
        <p className="text-white font-thin mt-2">
          As of <span className="font-normal">{time}</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-6xl font-semibold">{weather.temp.current}º</p>
        <p className="text-white font-thin">{weather.description}</p>
      </div>
    </div>
    <div className="flex flex-col items-center self-end">
      <img src={weather.icon} className="h-20" alt="weather-icon" />
      <p className="text-white mt-4 font-thin text-xl">
        <span className="font-semibold">{weather.temp.min}º</span> /{' '}
        <span className="font-semibold">{weather.temp.max}º</span>
      </p>
    </div>
  </div>
)

export default CityWeather
