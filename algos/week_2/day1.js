function arrayOddOccurances(arr) {

    var obj = {}
    
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1
        }
        // the below also works but is non-ideal
        // if (obj[arr[i]] != undefined) {
        //     obj[arr[i]] += 1
        // }
        else {
            obj[arr[i]] = 1
        }
    }
    for (let num in obj) {
        console.log(typeof num);
        if (obj[num] % 2 === 1) {
            return num;
        }
    }
}

console.log(typeof arrayOddOccurances([1, 1, 1, 1, 2, 2, 3, 3, 3, 6, 6]));