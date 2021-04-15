import { Duration } from 'luxon';

console.clear()

const d = Duration.fromObject({ hours: 3, minutes: 20, seconds: 59 });
const d2 = Duration.fromObject({ hours: 1 })

console.log(d.as('hours'))
console.log(d.hours)
console.log(d.minutes)
console.log(d.seconds)
console.log(d.years)
console.log(d.months)
console.log(d.numberingSystem)


console.log(d.negate().toObject())
console.log(d.toString())
console.log(d.toISOTime())