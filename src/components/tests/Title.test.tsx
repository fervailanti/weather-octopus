import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Title from '../Title'

describe('Title Component', () => {
  it('Should render correctly', () => {
    const title = render(
      <Title main={{ text: 'New York', size: 'xl' }} side={{ text: 'USA', size: 'md' }} />
    )
    expect(title.container).toMatchSnapshot()
    expect(title.container).toHaveTextContent('New York, USA')
  })
})
