/*
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find 
all the vowels in the string quoteSample.
*/

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
