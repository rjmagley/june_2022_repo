// Implement deduplicateSortedArray(arr), a function that accepts one argument: an array of items (arr). This array of items could be numbers or strings, but not both. The important thing to note is that the array is guaranteed to be sorted - you don't need to do it manually, you can assume that input will be in sorted order.



// ﻿The function's output will be the same array, but with all duplicate items in it removed. For example, if your input was [0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6], your expected output would be [0, 1, 2, 3, 4, 5, 6] - essentially, each item should only be in the array once. You very specifically want to do this in-place - you modify the array you're given. You can return that array if you want, but it's not necessary.
function deduplicateSortedArray(arr) {
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[j] == arr[i]) {
            arr.splice(j, 1);
            j--;
          }
        }
      }
      // use splice to remove element from array
    }
  
    return arr;
  }

function deduplicateSortedArray(arr) {
  
    for (var i = 0; i < arr.length; i++) {
      while (arr[i] == arr[i + 1]) {
        arr.splice(i + 1, 1);
      }
      // use splice to remove element from array
    }
  
    return arr;
}