import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithLoader from '../WithLoader'

const mockContent = <p>Hi! I'm a content</p>

describe('WithLoader High Order Component', () => {
  it.each([
    [
      "hide the content and show the spinner if it's loading",
      <WithLoader isLoading={true}>{mockContent}</WithLoader>,
      'invisible'
    ],
    [
      "hide the spinner and show the content if it's not loading",
      <WithLoader isLoading={false}>{mockContent}</WithLoader>,
      'visible'
    ]
  ])('Should %s', (_, component, expected) => {
    const withLoader = render(component)
    expect(withLoader.container).toMatchSnapshot()
    expect(withLoader.container.firstChild).toHaveClass(expected)
  })
})
