// Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."


const testStr = "Subhojit Dutta"

const abbrev_name = (str) => {
    const arrOfStr = str.split(" ")
    return (arrOfStr[0] + " " + arrOfStr[1].charAt(0))
}

console.log(abbrev_name(testStr));