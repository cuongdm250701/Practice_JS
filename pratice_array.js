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
