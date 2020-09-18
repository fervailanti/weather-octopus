import { images } from "../../images"

export const resolveWeatherIcon = (iconCode: string) => {
  const i = (key: string) => images.weather.icons[key]
  const icons: any = {
    '01d': i('sun'),
    '01n': i('moon'),
    '02d': i('sunCloudy'),
    '02n': i('moonCloudy'),
    '03d': i('clouds'),
    '03n': i('clouds'),
    '04d': i('wind'),
    '04n': i('wind'),
    '09d': i('showerRain'),
    '09n': i('showerRain'),
    '10d': i('sunRain'),
    '10n': i('moonRain'),
    '11d': i('storm'),
    '11n': i('storm'),
    '13d': i('snow'),
    '13n': i('snow'),
    '50d': i('mist'),
    '50n': i('mist'),
    default: i('forecast')
  }
  return icons[iconCode] || icons.default
}