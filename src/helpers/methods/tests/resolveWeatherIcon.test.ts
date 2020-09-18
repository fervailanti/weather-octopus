import { resolveWeatherIcon } from '../resolveWeatherIcon'
import { images } from '../../../images'

describe('Helper method resolveDate', () => {
  const { icons } = images.weather
  it.each([
    // Test cases (icon code with its respective image):
    ['01d', icons.sun],
    ['01n', icons.moon],
    ['02d', icons.sunCloudy],
    ['02n', icons.moonCloudy],
    ['03d', icons.clouds],
    ['03n', icons.clouds],
    ['04d', icons.wind],
    ['04n', icons.wind],
    ['09d', icons.showerRain],
    ['09n', icons.showerRain],
    ['10d', icons.sunRain],
    ['10n', icons.moonRain],
    ['11d', icons.storm],
    ['11n', icons.storm],
    ['13d', icons.snow],
    ['13n', icons.snow],
    ['50d', icons.mist],
    ['50n', icons.mist],
    // If the icon code it's not being catched, should return forecast icon as default
    ['rrrr', icons.forecast]
  ])('Should return correct svg by a given icon code', (input, output) => {
    expect(resolveWeatherIcon(input)).toBe(output)
  })
})