export function findDuplicates(arr: Array<number | string | boolean>) {
  return arr.reduce((acc, next, index) => {
    if (arr.slice(index + 1, arr.length).includes(next))
      return acc.includes(next) ? acc : acc.concat(next)
    return acc;
  }, []);
}

console.log(findDuplicates(['1', '2', '1', '2', true, '1', true]));