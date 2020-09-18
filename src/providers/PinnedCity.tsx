import React, { FC, useReducer, createContext, ReactElement } from 'react'
import { PinnedCityAction, PinnedCityContextType, PinnedCityType } from '../helpers/types'

const initialState: PinnedCityType = {
  id: 6359304,
  coord: {
    lon: -3.68275,
    lat: 40.489349
  },
  isLoading: true
}

const initialPinnedCity: PinnedCityType = JSON.parse(
  localStorage.getItem('pinnedCity') || JSON.stringify(initialState)
)

export const PinnedCityContext = createContext<PinnedCityContextType>({
  pinnedCity: initialPinnedCity,
  setPinnedCity: () => {}
})

const PinnedCityReducer = (
  prevState: PinnedCityType = initialPinnedCity,
  action: PinnedCityAction
) => {
  const actions: any = {
    id: {
      ...prevState,
      id: action.id
    },
    coord: {
      ...prevState,
      coord: action.coord
    },
    loading: {
      ...prevState,
      isLoading: action.loading
    }
  }
  localStorage.setItem('pinnedCity', JSON.stringify(actions[action.type]))
  return actions[action.type]
}

export const PinnedCityProvider: FC = ({ children }): ReactElement => {
  const [pinnedCity, setPinnedCity] = useReducer(PinnedCityReducer, initialPinnedCity)
  const value = { pinnedCity, setPinnedCity }
  return <PinnedCityContext.Provider value={value}>{children}</PinnedCityContext.Provider>
}
