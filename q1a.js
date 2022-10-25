// 1)Print odd numbers in an array

// Anonymous function

var a = function(array){
    for(var a = 0 ; a< array.length ; a++){
          if(array[a]%2!=0){
             console.log(array[a])
          } 
     }
  }

a([1, 2, 3, 4, 5, 0, 7, 8, 9,13]);

//   IIFE function


(function(array1){
for(var i = 0 ; i< array1.length ; i++){
          if(array1[i]%2!=0){
             console.log(array1[i])
          } 
     }
})([3,1,2,4,6,8,11])