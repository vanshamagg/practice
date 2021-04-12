require('./index')
console.log(module)

console.log(require.main === module)

console.log(require.main.filename)

console.log("CACHE", require.cache)

console.log("PATHS", require.resolve.paths())