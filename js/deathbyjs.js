//STEP 1
function alphabetical(newString){
    let result=Array.from(newString);
    result.sort();
    return(result.join(''));
}

//STEP 2
function upperCaseWord(newString){
    let result=newString.split(" ");
    let newArr=[];
    for (let word of result){
        newArr.push(word.charAt(0).toUpperCase().concat(word.slice(1))) 
    }
    return(newArr.join(' '));
}

//STEP 3
function vowelsCount(newString){
    const vowels =['a', 'e', 'i', 'o', 'u', 'y'];
    let number=0;
    let result=Array.from(newString);
    for (let v of result){
        if(vowels.includes(v)){number+=1}
    }
    return(number);
}

//STEP 4
function generate(specified){
    const list =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u' ,'v', 'w', 'x' ,'y' ,'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ,'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3' ,'4' ,'5', '6', '7' ,'8' ,'9' ];
    let result =[]
    for(let i=0; i<specified; i++){
        let helper= Math.floor(Math.random() * list.length)+1 ;
        result.push(list[helper]);
    }
    return(result.join(''));
}

//STEP 5
function Longest_Country_Name(myList){
    let result=myList[0]
    for( let country of myList){
        if(country.length>result.length){
            result=country;
        }
    }
    return(result);
}

//Call functions
console.log("Step 1: String with letters in alphabetical order");
console.log(alphabetical('webmaster'));
console.log("\n")
console.log("Step 2: Converts the first letter of each word to upper case");
console.log(upperCaseWord('the quick brown fox'));
console.log("\n")
console.log("Step 3: Count the number of vowels");
console.log(vowelsCount( 'The quick brown fox'));
console.log("\n")
console.log("Step 4: Generates a string id (specified length)");
console.log(generate(8));
console.log(generate(12));
console.log("\n")
console.log("Step 5: Returns the longest country name");
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
