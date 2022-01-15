// 1. Write a JavaScript function to check whether an `input` is a string or not
function myCheck(i) {
  const check = typeof i;
  if (check === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
}
myCheck("manh cuong");
// 2. Write a JavaScript function to check whether a string is blank or not
function isBlank(i) {
  if (i == "") {
    console.log(true);
  } else {
    console.log(false);
  }
}
isBlank("");
// 3. Write a JavaScript function to split a string and convert it into an array of words
function stringToArray(i) {
  const trimStr = i.trim();
  const result = trimStr.split(" ");
  console.log(result);
}
stringToArray("Manh Cuong");
// 4. Write a JavaScript function to extract a specified number of characters from a string
function truncateString(i, index) {
  const trimStr = i.trim();
  const sliceStr = trimStr.slice(0, index);
  console.log(sliceStr);
}
truncateString("Manh Cuong", 4);
// 5.Write a JavaScript function to convert a string in abbreviated form
function abbrevName(i) {
  const trimStr = i.trim();
  const splitStr = trimStr.split(" ");
  if (splitStr.length > 0) {
    const result = splitStr[0] + " " + splitStr[1].charAt(0) + ".";
    console.log(result);
  }
}
abbrevName("Manh Cuong");
// 6.Write a JavaScript function to hide email addresses to protect from unauthorized user
function protectEmai(i) {
  const trimStr = i.trim();
  const findChar = trimStr.search("@");
  if (findChar != -1) {
    const startCharSlice = findChar - 4;
    const sliceChar = trimStr.slice(startCharSlice, findChar);
    const hideChar = trimStr.replace(sliceChar, "...");
    console.log(hideChar);
  }
}
protectEmai("manhcuong@gmail.com");
// 7. Write a JavaScript function to parameterize a string
function stringParameterize(i) {
  const trimStr = i.trim();
  const cleanDot = trimStr.replace(".", "");
  const splitStr = cleanDot.split(" ");
  if (splitStr.length) {
    let result = "";
    for (let i = 0; i < splitStr.length; i++) {
      result += splitStr[i].toLowerCase() + " ";
    }
    const trimResult = result.trim();
    const addChar = trimResult.replace(/ /g, "-");
    console.log(addChar);
  }
}
stringParameterize("Robin Singh from USA.");
// 8. Write a JavaScript function to capitalize the first letter of a string
function capitalize(i) {
  const trimStr = i.trim();
  const findChar = trimStr.charAt(0);
  const convertCharToUpper = findChar.toUpperCase();
  const result = trimStr.replace(findChar, convertCharToUpper);
  console.log(result);
}
capitalize("js string exercises");
// 9. Write a JavaScript function to capitalize the first letter of each word in a string
function capitalizeWord(i) {
  const trimStr = i.trim();
  const splitStr = trimStr.split(" ");
  if (splitStr.length) {
    let result = "";
    for (let i = 0; i < splitStr.length; i++) {
      const convertChar = splitStr[i].charAt(0);
      const toUpperCaseChar = convertChar.toUpperCase();
      const replaceChar = splitStr[i].replace(convertChar, toUpperCaseChar);
      result += replaceChar + " ";
    }
    const trimResult = result.trim();
    console.log(trimResult);
  }
}
capitalizeWord("js string exercises");
// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case
function swapcase(i) {
  const trimStr = i.trim();
  const splitStr = trimStr.split("");
  if (splitStr.length) {
    let result = "";
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i].charAt(0) === splitStr[i].toLowerCase()) {
        result += splitStr[i].toUpperCase();
      }
      if (splitStr[i].charAt(0) === splitStr[i].toUpperCase()) {
        result += splitStr[i].toLowerCase();
      }
    }
    console.log(result);
  }
}
swapcase("AaBbc");
// 11. Write a JavaScript function to convert a string into camel case
function camelize(i) {
  const trimStr = i.trim();
  const spiltStr = trimStr.split(" ");
  let result = "";
  if (spiltStr.length > 1) {
    for (let i = 0; i < spiltStr.length; i++) {
      const findChar = spiltStr[i].charAt(0);
      const upperCase = findChar.toUpperCase();
      const replaceChar = spiltStr[i].replace(findChar, upperCase);
      result += replaceChar;
    }
  }
  if (spiltStr.length == 1) {
    result += i;
  }
  console.log(result);
}
camelize("JavaScriptExercises");
// 12. Write a JavaScript function to uncamelize a string
function uncamelize(i1, i2) {
  const trimStr = i1.trim();
  const splitStr = trimStr.split("");
  if (!i2) {
    i2 = " ";
  }
  let result = "";
  for (let i = 0; i < splitStr.length; i++) {
    let temp = splitStr[i];
    if (temp === splitStr[i].toUpperCase()) {
      temp = i2 + splitStr[i].toLowerCase();
    }
    result += temp;
  }
  console.log(result);
}
uncamelize("helloWorld", "-");
// 13. Write a JavaScript function to concatenates a given string n times (default is 1)
function repeat(i1, i2) {
  let result = "";
  result = i1.trim();
  if (i2) {
    for (let i = 1; i < i2; i++) {
      result += i1;
    }
  }
  console.log(result);
}
repeat("Ha!", 3);

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1)
function insert(i1, i2, i3) {
  const trimStr = i1;
  let result = "";
  if (!i2) {
    result += trimStr;
  }
  if (i2 && !i3) {
    result += i2 + trimStr;
  }
  if (i3) {
    const lengthStr = trimStr.length;
    const silceString = trimStr.slice(0, i3);
    const sliceStrEnd = trimStr.slice(i3, lengthStr);
    result += silceString + i2 + sliceStrEnd;
  }
  console.log(result);
}
insert("We are doing some exercises.", "JavaScript ", 18);
