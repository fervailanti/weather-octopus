import moment from 'moment'

export const resolveDate = (timestamp: number) => {
  return moment.unix(timestamp).format('dddd Do')
}