import { DateTime } from "luxon";

const JSdate = new Date().toString()
console.clear()


console.log(JSdate)

const luxonTime = DateTime.fromJSDate(new Date(JSdate))

console.log(luxonTime.day)
console.log(luxonTime.daysInMonth)
console.log(luxonTime.daysInYear)
console.log(luxonTime.hour)
console.log(luxonTime.minute)
console.log(luxonTime.second)
console.log(luxonTime.isInLeapYear)
console.log(luxonTime.locale)
console.log(luxonTime.millisecond)
console.log(luxonTime.monthLong)
console.log(luxonTime.monthShort)
console.log(luxonTime.offset)

console.log(luxonTime.ordinal)
console.log(luxonTime.quarter)
console.log(luxonTime.weekday)
console.log(luxonTime.weekdayLong)
console.log(luxonTime.zone)
console.log(luxonTime.zoneName)
console.log('--------------------------')

console.log(luxonTime.toISO())
console.log(luxonTime.toISODate())
console.log(luxonTime.toISOTime())
console.log(luxonTime.toISOWeekDate())
// console.log(luxonTime.toLocal())
console.log(luxonTime.toLocaleString())
console.log(luxonTime.toRFC2822())
console.log(luxonTime.toRelative({}))
console.log(luxonTime.toSQL())
console.log(luxonTime.toSQLDate())
console.log(luxonTime.toSQLTime())
console.log(luxonTime.toSeconds())
console.log(luxonTime.toString())
console.log(luxonTime.toUTC().toString())
// console.log(luxonTime.until(DateTime.fromSeconds(5658956323254)))
console.log(luxonTime.valueOf())


