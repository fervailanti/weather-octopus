import React, { FC, ReactElement } from 'react'
import Logo from './components/Logo'
import CurrentWeather from './containers/CurrentWeather'
import OtherWeather from './containers/OtherWeather'
import OtherCities from './containers/OtherCities'
import { PinnedCityProvider } from './providers/PinnedCity'

const App: FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center p-4">
      <Logo action={() => window.location.reload()} />
      <PinnedCityProvider>
        <div className="flex flex-col md:flex-row justify-around w-full">
          <CurrentWeather />
          <OtherWeather />
        </div>
        <OtherCities />
      </PinnedCityProvider>
    </div>
  )
}

export default App
