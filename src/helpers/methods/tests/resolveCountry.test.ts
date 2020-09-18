import { resolveCountry } from '../resolveCountry'

describe('Helper method resolveCountry', () => {
  it.each([
    // Test cases:
    [
      'ES',
      'Spain'
    ],
    [
      'US',
      'USA'
    ],
    [
      'AR',
      'Argentina'
    ],
    [
      'DE',
      'Germany'
    ],
    [
      // If the the country it's not being catched should return country code
      'MX',
      'MX'
    ]
  ])('Should translate country code and return country name', (input, output) => {
    expect(resolveCountry(input)).toBe(output)
  })
})