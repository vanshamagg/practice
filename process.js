const process = require("process");

process.on("beforeExit", (code) => {
    console.log(`the process exited event loop ${code}`);
});

process.on("exit", (code) => {
    console.log("this is where the code exits completely with code " + code);
});

process.emitWarning('Hey Dont do that', 'warning1')

process.on('warning', (warning)=> {
    console.log(`A warning was emitted \n ${warning}`)
})