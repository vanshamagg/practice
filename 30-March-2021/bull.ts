import * as Bull from 'bull'

const myFirstQueue = new Bull('my-first-queue');


(async () => {
    await myFirstQueue.add('minotaur', { name: "Vansham" })
    // await myFirstQueue.add({ name: "Vansham" })
    // process.exit(0)
    return `completed`
})()

export { myFirstQueue }