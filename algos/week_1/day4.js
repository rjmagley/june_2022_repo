function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;

        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        var temp = arr[j - 1];
        arr[j - 1] = arr[maxIndex];
        arr[maxIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([5, 4, 6, 1, 2, -3, 4]))
console.log(selectionSort([1, 0, -3, 4, 2, 5]))