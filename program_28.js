// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// enter number
console.log("Enter Number:")
var total = readlineSync.questionInt()

console.log("the factor of" +total+"is:")

if (total > 0)
{
  
  for(let i=total; i>=0; i--)
  {
    if(total%i ==0)
    {
      console.log(i)
    }
  }
} else {
  console.log("input should not be zero.")
}