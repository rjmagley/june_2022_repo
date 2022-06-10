function deduplicateSortedArray(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            removeCount = 0;
            removalIndex = i;
            while (arr[removalIndex] == arr[removalIndex + 1]) {
                removeCount++;
                removalIndex++;
            }
            arr.splice(i + 1, removeCount);
        }

        // use splice to remove element from array
    }

    return arr;
}

x = [0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 6, 6, 6, 8, 8, 21, 21, 21, 34, 34, 34, 34, 60, 61]
console.log(deduplicateSortedArray(x));