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


// //  String Methods
// //  to lower case
//  let firstName ="favour"
//  console.log(firstName)

// // // console.log(firstName.toLowerCase());

// // to Upper case
//  let class_Name = "p rospe r"
//  let class_Name = "prosper"
//  console.log(class_Name.toUpperCase());

// // length...tell how many xters are present in the string
// console.log(class_Name.length)

// // indexOf.. tells d index position of the xter u are given
//  let class_Name = "p rospe r "
//  console.log(class_Name.indexOf(" "));
//  console.log(class_Name.indexOf("r"));

// charAt  .. take an argument and finds the index position
//  let newName = "nonso"
// //  console.log(newName.charAt(0))
//  console.log(newName.charAt(5))

// // to Change the first letter to uppercase

// let pass ="password"
// console.log(pass.toUpperCase().charAt(0))

// let secondName = "Daniella"
// console.log(secondName.indexOf("l"))

// lastindexOf.. gives the last occurrence of the letter

// let secondName = "Daniella"
// console.log(secondName.lastIndexOf("l"))


// charCodeAt... gives unique code of  a particular xter(though not in use often)
// console.log(secondName.charCodeAt("i"))

// slice ... takes 2 arguments(the first index and d last index)
// let recordName = "Freedom Park"
// console.log(recordName.slice(0,7));
// console.log(recordName.slice(8,11));

// let myCase ="Mentho";
// console.log(myCase.slice(3,6));

// CLASSWORK
//  create a system that when  a user enters the number of xter
// length, it will slice it from middle to last xter
//
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
// let course = "New Palace New King";
//  console.log(course.replaceAll("New","Old"));


// console.log(randonWord,"", replaceWord,'\n', replacedAllWord)



// // concat

//  let firstWord = "Evil"
//  let secondName = "Friend"

//  let concatedWord = firstWord.concat(" ",secondWord);
//  console.log(concatedWord);

// Trim method
// let Trimmed =  secondWord.trim()
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
// if i want to get only man from the array, we target the index position. 
// let name = ["Man",23,true,[2,false]];
// console.log(name[0]);

// let name = ["Man",23,true,[2,false]];
// console.log(name[3][0]);

// // to  get the index of array inside an array
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

// // pop is opposite of push: removes the last element in an array and returns the lenght of the array
// const arrayPop = [1,2,3,4,5];
// const popArray = arrayPop.pop();


// // // to return  all the elements without the popped element, we console log the arraypop
// console.log(arrayPop);

// unshift adds at  the beginning of the array and returns the lenght of the array: it is the opposite of push
// let unshiftArr = [1,3,5,7];
// let unshiftResult  = unshiftArr.unshift(0);
// console.log(unshiftResult);

// // to display everything in the array, we console log unshiftArr.
// // console.log(unshiftArr)
// console.log(unshiftArr);


// shift removes an element from the beggining of array

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


// let x = "i am watching Dev Dreamer";
// console.log(x.toUpperCase());
// console.log(x.slice(14,25));

// Question 1: Create an array named
//  words with elements 'Hello' and 'World',
// and then join them into a single 
// string separated by a space.

// let words = ["Hello", "World"]; 
// console.log(words.join(" "));


// // Question 2: Given an array named data with elements 
// // 'apple', 'banana', and 'cherry', remove the last
// // element and return a string with the remaining elements 
// // separated by a hyphen.

// let data = ['apple', 'banana', 'cherry'];
// let popArray = data.pop();
// console.log(popArray);
// console.log(data);
// console.log(data.join(" - "));


// Question 3: Add 'grape' to the end of an array named fruits containing
// 'apple', 'banana', and 'cherry', and then convert the array to a 
// string with elements separated by commas.

// let fruits = ['apple', 'banana', 'cherry',];
// let newResult = fruits.push('grape');
// // console.log(fruits);
// console.log(fruits.join( " , " ));


// Question 4: Remove the first element from an array named 
// colors containing 'red', 'green', and 'blue', and then
//  convert the array to a string in lowercase

// let colors = ['red', 'green', 'blue'];
// let colorsResult = colors.shift();
// console.log(colorsResult);
// console.log(colors.join(" , ").toUpperCase());



// Question 5: Add 'David' to the beginning of an array named people 
// containing 'Alice', 'Bob', and 'Charlie', and then return a string 
// with elements enclosed in parentheses.

// let people = ['Alice','Bob','Charlie'];
// let newPeople  = people.unshift("David");
// console.log(newPeople);

// Question 6: Create an array named sentences with elements
// 'This is', 'a challenging', 'question'. Remove the second element, 
// concatenate the remaining elements into a single string, and 
// convert it to lowercase.

 let sentence = ['This is', 'a challenging', 'question'];
//  console.log(sentence);
//  console.log(sentence.indexOf('a challenging'));/
 console.log(sentence.splice(sentence.indexOf('a challenging'),1));
 console.log(sentence(' ').toLowerCase);

