/*
Write a regex and use the appropriate string methods to remove whitespace at the beginning 
and end of strings.
*/

let hello = "   Hello, World!  ";
let wsRegex = /\w+,\s\w+\W/;
let result = hello.match(wsRegex);
console.log(result);
