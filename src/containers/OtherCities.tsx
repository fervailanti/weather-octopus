import React, { FC, ReactElement, useContext } from 'react'
import Chip from '../components/Chip'
import { cities } from '../helpers/constans/cities'
import { resolveCountry } from '../helpers/methods/resolveCountry'
import { CoordType } from '../helpers/types'
import { PinnedCityContext } from '../providers/PinnedCity'

const OtherCities: FC = (): ReactElement => {
  const { pinnedCity, setPinnedCity } = useContext(PinnedCityContext)

  const cityAction = (id: number, coord: CoordType) => {
    setPinnedCity({ type: 'id', id })
    setPinnedCity({ type: 'coord', coord })
    const element: any = document.querySelector('#pinned-city-forecast')
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const offsetPosition = elementRect - bodyRect - 60
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col items-center md:mt-4 xl:mt-8">
      <p className="text-white font-thin text-xl my-3">Other cities you may also like:</p>
      <div className="flex md:flex-row flex-wrap justify-center mt-0">
        {cities
          .filter((e) => e.id !== pinnedCity.id)
          .map(({ id, name, country, image, coord }) => (
            <Chip
              key={id}
              title={name}
              subtitle={resolveCountry(country)}
              image={image}
              action={() => cityAction(id, coord)}
            />
          ))}
      </div>
    </div>
  )
}

export default OtherCities
