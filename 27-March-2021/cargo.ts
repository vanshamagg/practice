import { cargo } from "async";

const queue = cargo((tasks, callback) => {
    console.log(tasks)

    callback()
}, 2)

queue.push({ name: "vansham" }, (err, res) => {
    if (err) throw err
})
queue.push({ name: "vansham" }, (err, res) => {
    if (err) throw err
})
queue.push({ name: "vansham" }, (err, res) => {
    if (err) throw err
})