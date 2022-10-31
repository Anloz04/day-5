// Return all prime numbers in an array 

// anonymous function

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var prime = function(num){
    num = num.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++){
            if(number % i ==0) return false;

        }
        return true;
    });
    console.log(num);
}

prime(numbers);

// IIFE function

(
    function(num){
    num = num.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(num);
})

(numbers)
