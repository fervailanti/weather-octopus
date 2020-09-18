import React from 'react'
import { PinnedCityProvider, pinnedCityReducer } from '../PinnedCity'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Pinned City Provider (state)', () => {
  it.each([
    // ---- TEST CASES: ----
    // CASE 1:
    [
      // Prev State:
      {
        id: 2345,
        coord: {
          lon: 55,
          lat: 40
        },
        isLoading: false
      },
      // Action:
      {
        type: 'id',
        id: 6543
      },
      // Expected State:
      {
        id: 6543,
        coord: {
          lon: 55,
          lat: 40
        },
        isLoading: false
      }
    ],
    // CASE 2:
    [
      // Prev State:
      {
        id: 2345,
        coord: {
          lon: 55,
          lat: 40
        },
        isLoading: false
      },
      // Action:
      {
        type: 'coord',
        coord: {
          lon: 20,
          lat: 75
        }
      },
      // Expected State:
      {
        id: 2345,
        coord: {
          lon: 20,
          lat: 75
        },
        isLoading: false
      }
    ],
    // CASE 3:
    [
      // Prev State:
      {
        id: 2345,
        coord: {
          lon: 55,
          lat: 40
        },
        isLoading: false
      },
      // Action:
      {
        type: 'loading',
        loading: true
      },
      // Expected State:
      {
        id: 2345,
        coord: {
          lon: 55,
          lat: 40
        },
        isLoading: true
      }
    ]
  ])('Reducer should handle state correctly', (prevState, action, expectedState) => {
    expect(pinnedCityReducer(prevState, action)).toStrictEqual(expectedState)
  })

  it('PinnedCityProvider Component should render correctly', () => {
    const wrapper = render(
      <PinnedCityProvider>
        <p>TEST</p>
      </PinnedCityProvider>
    )
    expect(wrapper.container).toMatchSnapshot()
  })
})
