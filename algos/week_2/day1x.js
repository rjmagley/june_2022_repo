export function arrayOddOccurances(arr) {
    var result = {}
  
    //looping through the array to put into object
    for(var i = 0; i < arr.length; i++){
      if(result.hasOwnProperty(arr[i])){
        result[arr[i]] += 1;
      }else{
        result[arr[i]] = 1;
      }
    }
    //looking through the object
    for(var j = 0; j < Object.keys(result).length; j++){
      if(result[j] % 2 != 0){
        return result[j];
      }
    }
  }

x = typeof arrayOddOccurances([1, 1, 1, 1, 2, 2, 3, 3, 3, 6, 6]);
console.log(x);
