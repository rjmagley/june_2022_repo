function selectionSort(arr){
    for(var i = arr.length-1; i >= 0; i--){
        let max = i
        for(var j = 0; j< i;j++){
            if(arr[j] > arr[max]) max = j
        }
        [arr[i], arr[max]]=[arr[max], arr[i]];
    }
    return arr
}

console.log(selectionSort([5, 4, 6, 1, 2, -3, 4]))
console.log(selectionSort([1, 0, -3, 4, 2, 5]))