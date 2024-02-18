// Write a JavaScript function to create a zero-filled value with an optional +, - sign.
// Test Data :
// console.log(zeroFill(120, 5, '-'));
// "+00120"
// console.log(zeroFill(29, 4));
// "0029"

const zeroFill = (num,exp) => {
    return (num.toString().padStart(exp.toString(), '0'));
};

console.log(zeroFill(29,4))