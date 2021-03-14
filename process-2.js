const FLAG = 0;

if (FLAG === 1) {
    console.log("ABORT MISSION");
    process.abort();
}

console.log("THIS IS NICE");

console.log(process.allowedNodeEnvironmentFlags.has('report-directory'))

console.log("PROCESS ARCH = " + process.arch)

console.log("ARGUMENTS FROM THE COMMAND LINE", process.argv)

console.log('current dir -> ', process.cwd())

console.log('config options -> ', process.config)

console.log('CPU USAGE -> ', process.cpuUsage())

console.log("HIGH RESOLUTION TIME -> ", process.hrtime())

console.log("MEMORY USAGE ->", process.memoryUsage())

console.log("PROCESS ID -> ", process.pid)

console.log("CURRENT PLATFORM ->", process.platform)

console.log("RELEASE INFO ->", process.release)

console.log('REPORT ->', process.report)