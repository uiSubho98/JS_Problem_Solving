// Write a JavaScript function to remove non-word characters.
// Test Data :
// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
// "PHP - MySQL"

function removeNonWord(str) {
    return str.replace(/[^\w\s-]/g, '');
}


console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

