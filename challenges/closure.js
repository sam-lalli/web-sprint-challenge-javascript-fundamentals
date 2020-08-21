// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// the nestedFunction has access to the variable 'internal' because nestedFunction is a child of the parent function 'myFunction' with the understanding of closures we know that the child function has access what is inside the parent even after it is terminated.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let total = 0
  for( let i =0; i <= num; i++){
    total = total + i
  }
  return total
}

console.log(summation(4));