function findShortestString(arr) {
  //* based solution
  // return arr.reduce((a, b) => b.length < a.length ? b :a)
  // based on Dev blog
  let shortestStr = arr[0];
  arr.forEach((value) => {
    if(value.length < shortestStr.length) {
      shortestStr = value;
    }
  })
  return shortestStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
