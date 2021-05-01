const { exec } = require('child_process')

exec('systemctl status postgresql', (err, stdout, stderr) => {
    // process.stdout.write(stdout)
})