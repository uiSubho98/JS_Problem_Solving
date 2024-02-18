// Write a JavaScript function to uncapitalize the first character of a string.
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

const Uncapitalize = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1)
};

console.log(Uncapitalize("Js string exercise"))