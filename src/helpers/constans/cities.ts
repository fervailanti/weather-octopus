import { images } from '../../images'

export const cities: {
  id: number,
  name: string,
  country: string,
  image: string,
  coord: {
    lon: number,
    lat: number
  }
}[] = [
    {
      id: 6359304,
      name: 'Madrid',
      country: 'ES',
      image: images.cities.madrid,
      coord: {
        lon: -3.68275,
        lat: 40.489349
      }
    },
    {
      id: 5128581,
      name: 'New York',
      country: 'US',
      image: images.cities.newYork,
      coord: {
        lon: -74.005966,
        lat: 40.714272
      }
    },
    {
      id: 2968815,
      name: 'Paris',
      country: 'FR',
      image: images.cities.paris,
      coord: {
        lon: 2.3486,
        lat: 48.853401
      }
    },
    {
      id: 3169070,
      name: 'Rome',
      country: 'IT',
      image: images.cities.rome,
      coord: {
        lon: 12.4839,
        lat: 41.894741
      }
    },
    {
      id: 1850147,
      name: 'Tokyo',
      country: 'JP',
      image: images.cities.tokyo,
      coord: {
        lon: 139.691711,
        lat: 35.689499
      }
    },
    {
      id: 2950159,
      name: 'Berlin',
      country: 'DE',
      image: images.cities.berlin,
      coord: {
        lon: 13.41053,
        lat: 52.524368
      }
    }
  ]