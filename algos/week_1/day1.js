// Implement rotateArr(arr, shiftBy), a function that accepts an array and a number to shift it by. Shift arr's values to the right by that amount. 'Wrap around' any values that shift off array's end to the other side, so that no data is lost, and operate in-place - do not return a new array, but modify the array passed in. If the shiftBy value is longer than the array length, that's okay - it can wrap around, then wrap again and again and again.

// Bonus: what happens if you give a negative shiftBy value? Can you rotate your array to the left instead?

function rotateArr(arr, shiftBy) {

    // needs to handle negative shiftBy values - i.e. shifting to the left
    shiftBy = shiftBy % arr.length;

    if (shiftBy < 0) {
        shiftBy = shiftBy + arr.length;
    }

    console.log(shiftBy);


    for (var j = 0; j < shiftBy; j++) {
        var lastItem = arr[arr.length - 1];

        for (var i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
    
        arr[0] = lastItem;
    }

    return arr;
}

// console.log(rotateArr([4, 9, 11, 8], 1))
// console.log(rotateArr([4, 9, 11, 8], 2))
// console.log(rotateArr([4, 9, 11, 8], 3))
// console.log(rotateArr([4, 9, 11, 8], 4))
// console.log(rotateArr([4, 9, 11, 8], 5))
// console.log(rotateArr([4, 9, 11, 8], 6))
// console.log(rotateArr([4, 9, 11, 8], 7))
// console.log(rotateArr([4, 9, 11, 8], 8))
console.log(rotateArr([4, 9, 11, 8], 9))
console.log(rotateArr([4, 9, 11, 8], 21890671236789))