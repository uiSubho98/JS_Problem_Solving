// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robinsingh@example.com"));
// "rob...@example.com"

const testStr = "robinsingh@gmail.com";

const protect_email = (email) => {
  const [userName, domain] = email.split("@");
  return `${userName.slice(0,3)}....@${domain}`;
};

console.log(protect_email(testStr));
