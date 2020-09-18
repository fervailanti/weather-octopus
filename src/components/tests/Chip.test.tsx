import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Chip from '../Chip'
import { images } from '../../images'

describe('Chip Component', () => {
  it('Should render correctly and execute action passed by props', () => {
    const dummyAction = jest.fn()
    const chip = render(
      <Chip title="New York" subtitle="USA" image={images.cities.newYork} action={dummyAction} />
    )
    expect(chip.container).toMatchSnapshot()
    fireEvent.click(screen.getByText('New York'))
    expect(dummyAction).toHaveBeenCalledTimes(1)
  })
})
