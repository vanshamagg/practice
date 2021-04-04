
/**
 * Industry-grade function to compute sum of n arguments 
 */
function calcSum(...args) {

    var totalSum = 0;
    for (let number of args) {
       totalSum += number
    }

    return totalSum
}


calcSum(1, 2, 3, 4, 5, 6)