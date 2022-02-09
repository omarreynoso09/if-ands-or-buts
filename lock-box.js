const prompt = require('prompt-sync')();
const pinPrompt = prompt ("please enter a pin");
const pincode = "1234"

// if conditions

if (  pinPrompt === pincode) {
	console.log( "sucess");
}
else  {
	console.log("failure");
}