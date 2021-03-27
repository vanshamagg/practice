import { Process, Processor, InjectQueue, OnGlobalQueueActive } from '@nestjs/bull';
import { Job, Queue } from 'bull';

@Processor('task')
export class TaskProcessor {

    constructor(
        @InjectQueue('task')
        private readonly queue: Queue
    ) { 

        this.queue.add('create', {name: "Vansham"})
    }

    @Process('create') 
    async create(job: Job) {
        console.info("Some Job created -> ", job.id)
    }
    
    @OnGlobalQueueActive()
    onActive(jobId) {
        console.info("Some job entered the queue", jobId)
    }
}