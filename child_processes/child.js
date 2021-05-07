

console.info('-- starting CHILD PROCESS --')

process.on('message', (data) => {
    console.info('MESSAGE FROM PARENT PROCESS >> ', data)
})

process.send({ age: 24 })

console.info(`
        /////////////
        CHILD PROCESS
        /////////////
`)

console.info('PARENT >>', process.ppid)
console.info('THIS (CHILD) >>', process.pid)