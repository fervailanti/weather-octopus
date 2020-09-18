import moment from 'moment'

// This method can't be tested because of it's nature
// (Return a snapshot of the time by a given timezone)
// So, in other words, by the same timezone could return diferents times depending of the moment you execute it.

export const resolveTimezone = (timezone: number) => {
  return moment().utcOffset(timezone / 60).format('h:mm A')
}