// 1. Write a JavaScript function to check whether an `input` is an array or not.

isArray = (i) => {
  if (Array.isArray(i)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isArray([]);
// 2. Write a JavaScript function to clone an array.

arrayClone = (i) => {
  if (Array.isArray(i)) {
    console.log(i);
  }
};
arrayClone([1, 2, 3]);
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
first = (i1, i2) => {
  if (Array.isArray(i1) && i2) {
    if (i2 >= 0) {
      console.log(i1.slice(0, i2));
    } else {
      console.log([]);
    }
  }
  if (Array.isArray(i1) && !i2) {
    console.log(i1[0]);
  }
};
first([7, 9, 0, -2], -3);
//4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

last = (i1, i2) => {
  if (Array.isArray(i1) && i1.length && i2) {
    if (i2 >= 0) {
      console.log(i1.slice(-i2));
    } else {
      console.log([]);
    }
  }
  if (Array.isArray(i1) && i1.length && !i2) {
    const getEleLast = i1.slice(-1);
    console.log(getEleLast[0]);
  }
};
last([7, 9, 0, -2], 6);

// 5. Write a simple JavaScript program to join all elements of the following array into a string

myColor = (i) => {
  if (Array.isArray(i)) {
    console.log(i.join(","));
    console.log(i.join("-"));
    console.log(i.join("+"));
  }
};
myColor(["Red", "Green", "White", "Black"]);

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
myFunction = (i) => {
  if (typeof i === "string") {
    const convertString = i.toString();
    const stringToArray = convertString.split("");
    let result = stringToArray[0];
    for (let i = 1; i < stringToArray.length; i++) {
      if (
        Number(stringToArray[i]) % 2 == 0 &&
        Number(stringToArray[i - 1]) % 2 == 0
      ) {
        result += "-" + stringToArray[i];
      } else {
        result += stringToArray[i];
      }
    }
    console.log(result);
  }
};
myFunction("025468");
// 7. Write a JavaScript program to sort the items of an array.
sortArray = (i) => {
  if (Array.isArray(i)) {
    const sortNumber = i.sort((a, b) => a - b);
    console.log(sortNumber);
  }
};
sortArray([3, 8, 7, 6, 5, -4, -3, 2, 1]);
// 8. Write a JavaScript program to find the most frequent item of an array.
frequentItem = (array) => {
  if (Array.isArray(array)) {
    const arrayOutput = [];
    for (let i = 0; i < array.length; i++) {
      if (!arrayOutput.includes(array[i])) {
        arrayOutput.push(array[i]);
      }
    }
    console.log(arrayOutput);
    let arrayListLength = [];
    let item = "";
    let count = 0;
    for (let i = 0; i < arrayOutput.length; i++) {
      const filter = array.filter((item) => item == arrayOutput[i]);
      const listLength = filter.length;
      if (listLength > count) {
        count = listLength;
        item = filter[0];
      }
      arrayListLength.push(listLength);
    }
    console.log(count, item);
  }
};
frequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
swapCase = (i) => {
  if (typeof i === "string") {
    const string = i.trim();
    const stringToArray = string.split(" ");
    let result = "";
    for (let i = 0; i < stringToArray.length; i++) {
      const letter = stringToArray[i].split("");
      // console.log(letter);
      for (let j = 0; j < letter.length; j++) {
        // console.log(letter[j]);
        if (letter[j] != letter[j].toUpperCase()) {
          result += letter[j].toUpperCase();
        } else {
          result += letter[j].toLowerCase();
        }
      }
      result += " ";
    }
    console.log(result.trim());
  }
};
swapCase("The Quick Brown Fox");

// 10. Write a JavaScript program which prints the elements of the following array.
arrayTest = (array) => {
  if (Array.isArray(array)) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += `row ${i}: ${array[i].join(", ")}\n`;
    }
    console.log(result);
  }
};
arrayTest([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.
sumSquares = (array) => {
  if (Array.isArray(array)) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      const ex = array[i] ** array[i];
      sum += ex;
    }
    console.log(sum);
  }
};

sumSquares([1, 2, 3, 4]);

// 12. Write a JavaScript program to compute the sum and product of an array of integers.

sumAndMultilple = (array) => {
  if (Array.isArray(array)) {
    let sum = 0;
    let multi = 1;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      multi *= array[i];
    }
    console.log(sum);
    console.log(multi);
  }
};

sumAndMultilple([1, 2, 3, 4]);

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
removeDuplicateItem = (array) => {
  if (Array.isArray(array)) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
  }
};

removeDuplicateItem([1, 1, 21, 3, 4, 1, 2, 3, 4, 5]);

// 16. Write a JavaScript program to find the leap years in a given range of years.
getRanageOfYear = (array) => {
  if (Array.isArray(array)) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if ((array[i] % 4 == 0 && array[i] % 100 != 0) || array[i] % 400 == 0) {
        result.push(array[i]);
      }
    }
    console.log(result);
  }
};
getRanageOfYear([2000]);

// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

sumItemArray = (array1, array2) => {
  let condition;
  if (Array.isArray(array1) && Array.isArray(array2)) {
    const lengthArray1 = array1.length;
    const lengthArray2 = array2.length;
    condition = lengthArray2 >= lengthArray1 ? lengthArray2 : lengthArray1;
    let result = [];
    for (let i = 0; i < condition; i++) {
      if (array1[i] === undefined || array2[i] === undefined) {
        result.push(array1[i] === undefined ? array2[i] : array1[i]);
      } else {
        result.push(array1[i] + array2[i]);
      }
    }
    console.log(result);
  }
};
sumItemArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.
findItemDuplicate = (array) => {
  if (Array.isArray(array)) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      const itemDuplicate = array.filter((item) => item == array[i]);
      if (itemDuplicate.length > 1) {
        if (!result.includes(array[i])) result.push(array[i]);
      }
    }
    console.log(result);
  }
};
findItemDuplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);
