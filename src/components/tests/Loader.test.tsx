import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loader from '../Loader'

describe('Loader Component', () => {
  it('Should render correctly', () => {
    const loader = render(<Loader />)
    expect(loader.container).toMatchSnapshot()
  })
})
