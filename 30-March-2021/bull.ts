import * as Bull from 'bull'

const myFirstQueue = new Bull('my-first-queue', {
    limiter: {
        max: 1000,
        duration: 5000
    }
});


(async () => {
    await myFirstQueue.add({ name: "Vansham" }, {
        repeat: {
            cron: "* * * * *"
        }
    })
    // await myFirstQueue.add({ name: "Vansham" })
    // process.exit(0)
    return `completed`
})()

export { myFirstQueue }