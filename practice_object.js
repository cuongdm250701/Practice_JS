// 1. Write a JavaScript program to list the properties of a JavaScript object.

getKeyObject = (input) => {
  if (typeof input === "object") {
    const listKey = Object.keys(input);
    const keys = listKey.join(",");
    console.log(keys);
  }
};
getKeyObject({
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
});

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

deleteKey = (input) => {
  if (typeof input === "object") {
    console.log("Object before: ", input);
    delete input.rollno;
    console.log("Object after: ", input);
  }
};
deleteKey({
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
});

// 3. Write a JavaScript program to get the length of a JavaScript object.

sizeObject = (input) => {
  if (typeof input === "object") {
    const size = Object.keys(input).length;
    console.log(size);
  }
};

sizeObject({
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
});

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

checkStatus = (input) => {
  if (Array.isArray(input)) {
    input.forEach((element) => {
      if (element.readingStatus == true) {
        console.log(
          `Already reading ${element.title} with author is ${element.author}`
        );
      } else {
        console.log(
          `Not reading ${element.title} with author is ${element.author}`
        );
      }
    });
  }
};

checkStatus([
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
]);

// 6. Write a Bubble Sort algorithm in JavaScript.
bubleSort = (input) => {
  if (Array.isArray(input)) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length - 1; j++) {
        if (input[j] > input[j + 1]) {
          const temp = input[j];
          input[j] = input[j + 1];
          input[j + 1] = temp;
        }
      }
    }
    console.log(input);
  }
};

bubleSort([6, 4, 0, 3, -2, 1]);
