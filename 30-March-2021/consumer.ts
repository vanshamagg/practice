import * as Bull from 'bull'

const myFirstQueue = new Bull('my-first-queue');

myFirstQueue.process(async (job)=> {
    console.info('\nJob Data', job.data)
    console.info('job id', job.id)
})

myFirstQueue.on('completed', (job, result)=> {
    console.info('job completed')
    console.info('Result', result)
    console.info('Job Id', job.id)
    
})