const { fork } = require('child_process')
const { join } = require('path')
console.info('-- starting PARENT PROCESS --')

// const subprocess = fork(join(__dirname, 'child.js'), {  })
// // subprocess.channel.unref()
// subprocess.send({ name: "Vansham Aggarwal" })

// subprocess.on('message', (data) => {
//     console.info('MESSAGE FROM THE CHILD PROCESS >>', data)
// })

// console.info('PARENT PROCESS ID >>', process.pid)

// console.info("PIPE IPC >", subprocess.channel)
// subprocess.disconnect()
process.on('exit', ()=> console.log('parent exited'))