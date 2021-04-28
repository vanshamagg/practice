
const details = new Map()

details.set('vansham', { name: "Vansham" })
details.set('aashish', { name: 'Aashish' })

for (let [key, value] of details) {
    console.info(key + "  :  " + console.dir(value))
}
