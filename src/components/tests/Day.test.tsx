import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Day from '../Day'
import { images } from '../../images'

describe('Day Component', () => {
  it('Should render correctly', () => {
    const day = render(
      <Day
        date="Monday 20th"
        weather={{
          icon: images.weather.icons.sun,
          temp: { min: 12, max: 15 }
        }}
      />
    )
    expect(day.container).toMatchSnapshot()
  })
})
