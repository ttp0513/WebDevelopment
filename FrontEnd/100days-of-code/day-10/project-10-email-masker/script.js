function maskEmail(email) {
  let at = email.indexOf('@');
  let maskedItem = email.slice(1, at-1);
  let maskedRepeat = `*`.repeat(maskedItem.length);
  return email.replace(maskedItem,maskedRepeat)
}

let email = prompt('Please provide your email','Guest@example.com');

if (email !== null) {
  console.log("Your masked email is " + maskEmail(email));
} else {
  console.log("User canceled the prompt.");
}
