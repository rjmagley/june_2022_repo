function arrayBalanceIndex(arr) {
  
    var rightSum = 0;
    var leftSum = arr[0];
    // Write your solution here!
    for (var i = 1; i < arr.length; i++){
      rightSum += arr[i];
    }
  
    
    for (var j = 1; j < arr.length; j++){
  
      rightSum = rightSum - arr[j];
      
      if (leftSum == rightSum){
        return j;
      }
      leftSum += arr[j];
    }
  
    //print(initialSum)
  
    return -1
  }

console.log(arrayBalanceIndex([3, 4, 9, 2, 4, -2, 3]));
console.log(arrayBalanceIndex([0, 0, 5, -5]));
console.log(arrayBalanceIndex([1]));
console.log(arrayBalanceIndex([1000, 0, 1, 5, 2]));