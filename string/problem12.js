// Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

const uncamelize = (str, separator) => {
  const regex = /([a-z])([A-Z])/g;
  let result;
  if (separator) {
    result = str.replace(regex, `$1${separator}$2`).toLowerCase();
  } else {
    result = str.replace(regex,`$1${" "}$2`).toLowerCase();
  }
  return result;
};

console.log(uncamelize("helloWorld")); // Output: "hello world"
console.log(uncamelize("helloWorld", "-")); // Output: "hello-world"
console.log(uncamelize("helloWorld", "_")); // Output: "hello_world"
