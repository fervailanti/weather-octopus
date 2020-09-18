export const resolveCountry = (country: string) => {
  const countries: any = {
    AR: 'Argentina',
    US: 'USA',
    ES: 'Spain',
    IT: 'Italy',
    JP: 'Japan',
    FR: 'France',
    DE: 'Germany'
  }
  return countries[country] || country
}