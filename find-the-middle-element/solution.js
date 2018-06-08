// Function to find the middle element in a tuple
var gimme = function (inputArray) {
    var newArray = inputArray.slice();
    newArray.sort((a, b) => a - b);
    return inputArray.findIndex(inputArray => inputArray === newArray[1]);
  }