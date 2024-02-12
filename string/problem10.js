// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase(str) {
    const arrofStr = str.split("").map((e) => { 
        if (e === e.toUpperCase()) {
            return e.toLowerCase()
        }
        else {
            return e.toUpperCase()
            
        }
    }).join("")

    return arrofStr
    
}

console.log(swapcase("SubhojitDutta"))