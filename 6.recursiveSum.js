// Q6.
// Implement a function that accepts an array of integers as an argument. 
// This function should return the sum of each integer in the array. 
// Your solution should be **recursive**. Your function must be pure (cannot use global variables)


const recursiveSum = (arr, i = 0, sum = 0) => {
    if (i === arr.length + 1) {
        return
    }

    // sum += arr[i]
    console.log('arr', sum);

    recursiveSum(arr, i + 1, sum += arr[i])
}

const arr1 = [5, 2, 9, 11, 1]
recursiveSum(arr1);
 // should return 27
