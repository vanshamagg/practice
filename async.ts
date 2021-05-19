async function asyncReduce<T, U>(arr: Array<T>, cb: (accumulator: U, item: T) => U | Promise<U>, initialValue: U = undefined) {
    let acc = initialValue;
    for (let item of arr) {
        acc = await cb(acc, item);
    }
    return acc;
}

async function random(item: string) {

    return item + " FROM ASYNC";
}

const arrNames = [
    'Vansham',
    'Jashan',
    'Manav',
    'Navprreet'
];

(async () => {
    const arr = await asyncReduce(
        arrNames,
        async (acc, item) => {
            const str = await random(item);
            return acc.concat(str);
        },
        []
    )
    console.log(arr)
})()