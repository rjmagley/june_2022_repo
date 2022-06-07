function rotateArr(arr, shiftBy) {

    if (arr.length == 0) {
        return arr;
    }

    // needs to handle negative shiftBy values - i.e. shifting to the left
    shiftBy = shiftBy % arr.length;

    if (shiftBy < 0) {
        shiftBy = shiftBy + arr.length;
    }

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        x = ((arr.length + i - shiftBy) % arr.length)
        newArr.push(arr[x])
    }

    // console.log(newArr);

    
    for (var i = 0; i < newArr.length; i++) {
        arr.push(newArr[i]);
    }
 
    return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2))
console.log(rotateArr([1, 2, 3, 4, 5], 3))
console.log(rotateArr([1, 2, 3, 4, 5], 4))
console.log(rotateArr([1, 2, 3, 4, 5], 5))
console.log(rotateArr([1, 2, 3, 4, 5], 6))
console.log(rotateArr([1, 2, 3, 4, 5], 6))