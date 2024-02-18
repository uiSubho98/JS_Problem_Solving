// Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

const a = (str, exp)=>{
    let count = 0;
        if(exp){
            const res = str.split(" ").map((e)=>{
                if(e.toLowerCase() === exp.toLowerCase()){
                    count++
                }
            })
        }
return count
    }
console.log(a("The quick brown fox jumps over the lazy dog","fox"))