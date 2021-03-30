import * as Bull from 'bull'

const myFirstQueue = new Bull('my-first-queue');

myFirstQueue.process(async (job) => {

    console.log('Job picked up by consumer 2')
    for (let i = 0; i < 10000000; i++) {

    }
    console.info('\nJob Data', job.data)
    console.info('job id', job.id)
})

myFirstQueue.on('completed', (job, result) => {

    console.log('Job Completed by consumer 2')
    console.info('\njob completed')
    console.info('Result', result)
    console.info('Job Id', job.id)

})