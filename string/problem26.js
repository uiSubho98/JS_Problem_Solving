// Write a JavaScript program to find the most frequent character in a given string.
// Test Data :
// ("Madam") -> "a"
// ("civic") -> "c"
// ("HellloL223LLL") -> "L"
// (12321) -> "It must be a string."


const findMostRepeatedChar = (str) => {
    const charCount = {};
    let maxChar = "";
    let maxCount = 0;
    
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
      console.log(charCount)
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
    
    return { char: maxChar, count: maxCount };
  };
  
  const result = findMostRepeatedChar("HellloL223LLL");
  console.log(`Most repeated character: ${result.char}, Count: ${result.count}`);
  

