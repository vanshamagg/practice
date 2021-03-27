import { cargoQueue } from "async";

const cg = cargoQueue((tasks, cb) => {
    console.log(tasks)
    cb()
}, 10, 1)

cg.push({name: "Vansham"}, (err)=> {})
cg.push({name: "Vansham"}, (err)=> {})
cg.push({name: "Vansham"}, (err)=> {})
cg.push({name: "Vansham"}, (err)=> {})