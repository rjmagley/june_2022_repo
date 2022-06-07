function arrayBalanceIndex(arr) {
    // iommediately return -1 if there's not enough items in the array
    if (arr.length <= 2) {
        return -1;
    }
    for (var i = 1; i < arr.length - 1; i++) {
        // i represents the index of the number we are comparing
        // the sums on either side of
        var leftSum = 0;
        var rightSum = 0;
        for (var leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += arr[leftIndex];
        }
        for (var rightIndex = i + 1; rightIndex < arr.length; rightIndex++) {
            rightSum += arr[rightIndex];
        }
        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(arrayBalanceIndex([3, 4, 9, 2, 4, -2, 3]));
console.log(arrayBalanceIndex([0, 0, 5, -5]));
console.log(arrayBalanceIndex([1]));
console.log(arrayBalanceIndex([1000, 0, 1, 5, 2]));