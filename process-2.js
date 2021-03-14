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

process.chdir('/home/vansham/SANCTUM/MISC-PROJECTS/practice/another')