import { writeFile, stat } from 'fs'
import { map, filter, each, eachLimit, every, filterSeries, mapValues, applyEach } from 'async'

const nameArr = [
    'Vansham',
    'Manav',
    'Navpreet',
    'Vansh'
]

const nameObj = {
    n1: "Vansham",
    n2: "Manav",
    n3: "Vansh",
    n4: "Maryam"
}
// each parallel
// each(
//     nameArr,

//     (item, callback) => {
//         console.log('PRINTING, ', item)
//     },
//     (err) => {
//         if (err) {
//             console.info('something stopped the processing')
//             throw err

//         } console.log("OP COMPLETED")
//     }
// )

// each parallel with a limit
// eachLimit(
//     nameArr,
//     1,
//     (item, cb) => {
//         console.log('PRINTING -> ', item)
//         cb()
//     },
//     (err) => {

//     }
// )

// every(
//     [
//         'Vansham',
//         1,
//         'Navpreet'
//     ],
//     (item, cb) => {
//         if (typeof item !== 'string')
//             cb(new Error('not a string'), false)

//         process.stdout.write(item + '\n')
//         cb(null, true)

//     },
//     (err) => {
//         if (err) throw err
//     }

// )

// filter(
//     nameArr,
//     (item, cb) => {
//         if (item.includes('V'))
//             cb(null, true)
//         else
//             cb(null, false)
//     },
//     (err, result) => {
//         if (err) throw err
//         process.stdout.write(result + '\n')
//     }
// )

// mapValues(
//     nameObj,
//     (value, key, cb) => {
//         cb(null, 'Mr. ' + value)
//     },
//     (err, result) => {
//         if (err) throw err
//         console.log(result)
//     }
// )

const fn1 = function (name) {
    console.info(name)
    return name;
}

const fn2 = function (name) {
    console.info(name)
    return 'Mr . ' + name
}

applyEach([
    fn1,
    fn2
],
    "Vansham",
    (err, res) => {
        console.log(res)
    })
