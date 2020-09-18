const req = (route: string) => require(`../images/gallery/${route}`)

export const images: any = {
  common: {
    octopus: req('common/octopus.png'),
    reload: req('common/reload.svg')
  },
  cities: {
    newYork: req('cities/new_york.jpg'),
    rome: req('cities/rome.jpg'),
    madrid: req('cities/madrid.jpg'),
    tokyo: req('cities/tokyo.jpg'),
    paris: req('cities/paris.jpg'),
    berlin: req('cities/berlin.jpg'),
  },
  weather: {
    icons: {
      sun: req('icons/sun.svg'),
      moon: req('icons/moon.svg'),
      sunCloudy: req('icons/sun-cloudy.svg'),
      moonCloudy: req('icons/moon-cloudy.svg'),
      clouds: req('icons/clouds.svg'),
      wind: req('icons/wind.svg'),
      rain: req('icons/rain.svg'),
      showerRain: req('icons/shower-rain.svg'),
      sunRain: req('icons/sun-rain.svg'),
      moonRain: req('icons/moon-rain.svg'),
      storm: req('icons/storm.svg'),
      snow: req('icons/snow.svg'),
      mist: req('icons/mist.svg'),
      forecast: req('icons/forecast.svg')
    }
  }
}