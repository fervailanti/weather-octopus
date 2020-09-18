import { Dispatch } from 'react'
import { PinnedCityContext } from '../providers/PinnedCity'

export interface CoordType {
  lat: number | undefined
  lon: number | undefined
}

export interface TempType {
  current?: number
  min: number,
  max: number
}

export interface WeatherType {
  icon: string
  temp: TempType
  description?: string
}

export interface PinnedCityType {
  id: number,
  coord: CoordType,
  isLoading: boolean
}

export interface PinnedCityAction {
  type: 'id' | 'coord' | 'loading'
  id?: number
  coord?: CoordType
  loading?: boolean
}

export interface PinnedCityContextType {
  pinnedCity: PinnedCityType
  setPinnedCity: Dispatch<PinnedCityAction>
}

export interface CityType {
  id?: number
  name: string
  country: string
  time: string
  weather: WeatherType
}

export interface DayType {
  date: string
  weather: WeatherType
}

export type DailyForecastType = DayType[]
