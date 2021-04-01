// Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const message1 = "I can walk in the park all day!";
console.log(message1.slice(18,-9));
// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const message2 = "Hello World";
console.log(message2.toUpperCase());
// Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
const message3 = "Hello Earthling";
console.log(message3.toLowerCase());
// Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const message4 = "JavaScript";
console.log(message4.slice(3,6));
// Check if the sentence "nice shoes" contains the letter l or n.
console.log("nice shoes".includes("l"));
console.log("nice shoes".includes("n"));
// Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const word1 = "Bananas";
console.log(word1[0]+word1+word1[0]);
// Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const word2 = "Scritch";
console.log(word2.slice(4)+word2+word2.slice(4));
// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
const word3 = "BoogieWoogie";
console.log(word3.slice(-1)+word3.slice(1,-1)+word3[0]);
// Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".
const name = "Kalaya";
const city = "Berlin";
const occupation = "student";
console.log("My name is", name, "I live in", city, "and I'm a", occupation, ".");
// Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const message5 = "the quick brown fox";

console.log(`${message5.slice(0,1).toUpperCase() + message5.slice(1)}`);