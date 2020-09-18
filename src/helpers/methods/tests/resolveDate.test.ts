import { resolveDate } from '../resolveDate'

describe('Helper method resolveDate', () => {
  it.each([
    // Test cases:
    [
      1600527600,
      'Saturday 19th'
    ],
    [
      1600700400,
      'Monday 21st'
    ],
    [
      1600786800,
      'Tuesday 22nd'
    ]
  ])('Should create a friendly date by timestamp code', (input, output) => {
    expect(resolveDate(input)).toBe(output)
  })
})