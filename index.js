// String =""
// number = -3,0,6,1
// boolean = true, false
// null = null
// undefined = undefined


// non primitive
// Array = [1,"hshs". true,[jewkm],{nme:"hsg"}}
// Object ={name:"gs",age:[],class:{sgrvfv:"ywhgb"}}

// console.log("3")
// console.log(typeof("3"))

// // 19/09/2003
// Java Script keyword
// // let const ="man"
// // let else = 3
// // let if = null
// // let break = "hello"
// // let default = "hello"


// // String Methods
// // to lower case
// // let firstName ="favour"
// // console.log(firstName)

// // console.log(firstName.toLowerCase());

// // to Upper case
// let class_Name = "p rospe r"
// let class_Name = "prosper"
// console.log(class_Name.toUpperCase());

// // length...tell how many xters are present in the string
// console.log(class_Name.length)

// // indexOf.. tells d index posotion of the xter u are given
// let class_Name = "p rospe r "
// console.log(class_Name.indexOf(" "));
// console.log(class_Name.indexOf("k"));

// charAt  .. take an argument and finds the index position
// let newName = "nonso"
// // console.log(newName.charAt(0))
// console.log(newName.charAt(5))

// to Change the fisr name to uppercase

// let pass ="password"
// console.log(pass.toUpperCase().charAt(0))let pass ="password"

// let secondName = "Daniella"
// console.log(secondName.indexOf("l"))

// lastindexOf.. gives the last occurrence of the letter

// let secondName = "Daniella"
// console.log(secondName.lastIndexOf("l"))


// charCodeAt... gives unique code of  a particular xter(but not in use often)
// console.log(secondName.charCodeAt("i"))

// slice ... takes 2 arguments(the first index and d last index)
// let recordName = "Freedom Park"
// console.log(recordName.slice(0,7));
// console.log(recordName.slice(8,11));

// CLASSWORK
//  create a system that when  a user enters t number of xter
// length, it will slice it from middle to last xter
// let myCase ="Mentho"
// console.log(myCase.slice(3,6))
// const userInput = ("many");
// const inputLength = userInput.length;
// const midpoint = (inputLength/2);
// const Half = userInput.slice(midpoint);
// console.log(Half);


// const userInput = ("transparent");
// const inputLength = userInput.length;
// const midpoint = (inputLength/2);
// const Half = userInput.slice(midpoint);
// console.log(Half);


// other string method
// Replace
// let randomWord = "New Palace"
// let replaceWord = randomWord.replace("New","Old")
// console.log(randomWord,"")
// let randomWord = "New Palace New King"
// let replaceAllWord = randomWord.replaceAll("New","Old")

// console.log(randonWord,"", replaceWord,'\n', replacedAllWord)



// // concat

// // let firstWord = "Evil"
// // let secondName = "Friend"

// // let concatedWord = firstWord.concat(" ",secondWord)
// console.log(concatedWord);

// Trim method
// let Trimmed secondWord.trim()
// console.log(secondWord);
// console.log(Trimmed);


// // substring
// let str = "Hello World"
// let resultSubstr = str.substring(0,4)
// console.log(resultSubstr);

// repeat
// let man = "Evil Man Johnnie"
// to make space in between the sentences, you put space
//  the quote at the end of the sentence Johnnie
// let man = "Evil Man Johnnie "
// let result = man.repeat(10)
// console.log(result);

// // // startWith
// let Word = "Egg roll"
// let start = Word.startsWith("E",3)
// console.log(start)


// 20/09/2003
//  Number Methods (converts a number to string)
//  let number = 99
// // console.log(number)
// let numberResult = number.toString(99);
// console.log(numberResult);

// // Math Method mainly for calculator Project App
// const maths  = Math.sqrt(16)
// console.log(maths)

// let results = Math.cos(45)
// console.log(results)


// // to raise a powrt. eg 2 raise to power 2
// // math.pow(x,y). x is d number and y is the exponent
// let anodaNumber = Math.pow(4,3)
// console.log(anodaNumber);


// let newNumber = Math.min(3)
// console.log(newNumber);


// // Math.random... gives us random number (mostly for OTP)
// let newNumber = Math.random()*10
// console.log(newNumber);

// let newNumber = Math.min(3)
// console.log(newNumber);


// math.floor.. rounds up a number
// let newNumber = Math.floor(Math.random(110)*100)
// console.log(newNumber);

// Math.Ceil rounds down the number

// let ceilNumber = Math.ceil(Math.random()*100)
// console.log(newNumber.ceilNumber);

// let roundNumber = Math.round(Math.random()*100)
// console.log(newNumber.ceilNumber);

// Assignment
// var str = "New Dawn";
// let word = "how are you doing today?";
// let wordBefore = word.length;
// let wordReplace = word.replace(/\s/g, "");
// let wordafter = word.lenth
// console.log(word);
// console.log(wordBefore);
// console.log(wordReplace);
// console.log(wordafter);

// Method 2
// let text = "Hell no";
// console.log(text);
// let textBeforeLength = text.length;
// console.log(textBeforeLength);
// let replacedText = text.replaceAll(" ", "");
// console.log(replacedText);
// let replacedTextLength = replacedText.length;
// console.log(replacedTextLength);

// Ans to question2
// let Best_mc = "Eminem and no one else";
// console.log(Best_mc);
// let Wack_mc = ("no one else, shaddy");
// console.log(Wack_mc);

// Array Methods: array accepts different list of data type.
// its like a container storing data for you.
//  eg
// let name = ["Man",23,true,[2,false,["food",20]]];
// let arr = Array("Nile",3, true, ["Gold", null]);

// console.log(name);
// console.log(arr);
// if i want to get only man form the array, we target the index position. 
// let name = ["Man",23,true,[2,false]];
// console.log(name[0]);

// let name = ["Man",23,true,[2,false]];
// console.log(name[3][0]);

// // to call get the index of array inside an array
// let name = ["Man",23,true,[2,false,["food",20]]];
// console.log(name[3][1];)


// 26/09/2003 ARRAY METHOD
// Higher order are written with a call back function()=>{}.

// Normal Method
// Example

// what type of string method converts this to Array.
// we use split method
// const names = "Bad Man,Good man, Yellow boy";
// const resultName = names.split(",");
// console.log(resultName);

// eg 2
// if we want to split the n from the String
// const names = "Bad Man,Good man, Yellow boy";
// const resultName = names.split('n');
// console.log(resultName);

// eg 3
// if we use an empty string
// const names = "Bad Man,Good man, Yellow boy";
// const resultName = names,split("");
// console.log(resultName);


// Array Method (Push) it adds element at d end of an array and returns d new lenth
// const newArr = ["Finbar", 34,true];
// const arrResult = newArr.push("Money");
// console.log(arrResult);

// console.log("New length", arrResult);
// // To display all the elements
// console.log(newArr);

// pop is opposite of push: removes the last element in an array and returns the lenght of the array
// const arrayPop = [1,2,3,4,5];
// const popArray = arrayPop.pop();
// console.log("ArrayPopped",popArray);

// // to return the all the elements without the popped element, we console log the arraypop
// console.log(arrayPop);

// unshift adds at  the beginning of the array and returns the lenght of the array: it is the opposite of push
// let unshiftArr = [1,3,5,7];
// let unshiftResult  = unshiftArr.unshift(0);
// console.log(unshiftResult);

// // to display everything in the array, we console log unshiftArr.
// // console.log(unshiftArr)
// console.log(unshiftArr);


// shift

// let shiftArr =[4,6,8];
// let shiftArrResult =shiftArr.shift()
// console.log(shiftArrResult);
// console.log(shiftArr);


// reverse

// let name = ["F","i","n","b","a","r"];
// let reversedArr = name.reverse();
// console.log(reversedArr); 

// let name = [1,2,3,4,5,6,7];
// let reversedArr = name.reverse();
// console.log(reversedArr); 

// Classwork
// write a js code that reverses a string "Hello" to be "Olleh" Value must be a string

// let name  ="Hello";
// let reversedArr = name.reverse();
// console.log(reversedArr);