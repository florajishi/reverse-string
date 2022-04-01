function reverseString(str) {
  let revStr = ""
  for(let i = str.length -1; i >= 0; i--){
    revStr += str[i]
  }
  return revStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
function reverseStr takes in parameter of string
declare reversed string variable with "" so js knows its specifically a string
for loop:
  i starts at the end of the string's length (-1) and as long as it's greater than or equal to 0, it will decrement
  i must be greater than or = to 0 because the index, if starting at end of string, will be greater than 0 (for example, in "hello" i starts at [4])
return reversedStr VARIABLE + str[i]. We declared revStr as a blank str so it will just take on the reversed letters
*/