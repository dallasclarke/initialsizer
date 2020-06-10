/*******************************************************************************
 * Your code here!
 ******************************************************************************/

//Function to get user initials.

function getInitials(first, last) {
  const firstName = first[0];
  const lastName = last[0];
  return firstName + '.' + lastName;
}

//function for counting the characters in first & last name.
function nameCount(nameOne, nameTwo) {
  return nameOne.length + nameTwo.length; 
}

//First & last name require a seperate getInput
let userInput1 = getInput(0);
let userInput2 = getInput(1);

let initials = getInitials(userInput1, userInput2);
let nameLength = nameCount(userInput1, userInput2);
let messageOne = 'Hey, ';
let messageTwo = ' Mind if I call you that? Your full name is ';
let messageThree = ' letters long!'

console.log(messageOne + initials + messageTwo + nameLength + messageThree)




/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
