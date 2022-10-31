// Remove duplicates from an array

let arr = [1, 1, 2, 3, 3, 4, 4];


let a = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }

a(arr);


(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4,6,6])

