// Write a JavaScript program to find the most frequent word in a given string.
// Test Data :
// ("The quick brown fox jumps over the lazy dog") -> "the"
// ("Python is a high-level, general-purpose programming language.") -> "python"
// (" It was the same man, she was sure of it. It's always the same, Chauncey.") -> "was"
// (12321) -> "It must be a string."

const test = (str) => {
  const words = str.toLowerCase().split(" ");
  const wordCount = {};
  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word].count++;
    } else {
      wordCount[word] = { count: 1, char: word };
    }
  });

  return Object.values(wordCount);
};


  test(
    "It was the same man, she was sure of it. It's always the same, Chauncey."
  )
