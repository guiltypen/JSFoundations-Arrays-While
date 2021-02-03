function isArrayLengthOdd(numbers) {
  let nlength = numbers.length; // get array lenght
  return nlength % 2 == 0 ? false : true; // returns true if odd and false if even
}

function isArrayLengthEven(numbers) {
  let nlength = numbers.length; // get array length
  return nlength % 2 == 0 ? true : false; // returns true if even and false if odd
}

function addLailaToArray(instructors) {
  instructors.push("Laila"); // add Laila to array
  return instructors; // returns the array
}

function eliminateTeam(teams) {
  return teams.pop(); // remove the last array value
}

function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 == 0) {
    // if even
    let newarry = fruits.slice(fruits.length / 2, fruits.length); // slice the array from half of the length to the end
    return newarry;
  } else if (fruits.length % 2 == 1) {
    // if odd

    return [];
  }
}

function youGottaCalmDown(shout) {
  let asplit = shout.split(""); // splits string to array
  let x = []; // empty array
  let i = 0; // counting variable
  while (shout[i] != "!") {
    // while the array doesnt equal !
    x[i] = shout[i]; // add value the array x
    i++; // count
  }
  x[i] = shout[i + 1]; // add ! to the array
  let y = x.join(""); // convert array to string
  return y; // return the new string
}

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
