//STEP 1
// let userName=prompt("Enter your name please");
// alert(userName.length)

//STEP 2
// let userName=prompt("Enter your name please");
// let number=parseInt(prompt(`Enter a number between 0 and ${userName.length-1}`));
// if (number>=0 && number<=userName.length-1){
//      alert(userName.charAt(number));
// }
// else {
//      alert("Wrong number")
// }

//STEP 3
// let firstName=prompt("Enter your first name please");
// let lasttName=prompt("Enter your last name please");
// alert('Your name is:'.concat(' ', firstName, ' ', lasttName));

//STEP 4
// let variable = "The quick brown fox jumps over the lazy dog"
// alert(variable.indexOf('fox'))

//STEP 5
// let variable = "The quick brown fox jumps over the lazy fox"
// alert(variable.lastIndexOf('fox'))

//STEP 6
// let variable = "The quick brown fox jumps over the lazy dog";
// let userName=prompt("Enter your full name please");
// let temp = variable.indexOf("the lazy dog")
// alert( variable.slice(0, temp).concat(userName))

//STEP 7
// let variable = "The quick brown fox jumps over the lazy dog".toLocaleLowerCase();
// let userWord=prompt("Enter your word please").toLocaleLowerCase();
// let result = variable.indexOf(userWord)
// if (result>=0){alert(`Your word "${userWord}" is in the text. The index of this word is ${result}`)}
// else {alert("Your word is not found")}

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog".toLocaleLowerCase();
// let temp = old_string.indexOf("the lazy")
// let new_string = old_string.substring(temp)
// alert (new_string.toUpperCase())

//STEP 9
// let variable= " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert(variable.toLowerCase().trim())

//STEP 10
let fox='the quick brown fox jumps over the lazy dog';
let firstLetter = fox.charAt(0).toUpperCase();
alert (firstLetter.concat(fox.slice(1))) 