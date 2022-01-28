// my method myForEach construction
Array.prototype.myForEcach = function (callback) {
  let arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      callback(this[i], i, this);
    }
  } else {
    const e = new Error("undefined is not a function");
    throw e;
  }
};
const forEachCourse = ["Javascript", "PHP", "NodeJs", "ReactJS"];
const rsForEach = forEachCourse.myForEcach(function (item, index, array) {
  console.log(item);
  console.log(index);
  console.log(array);
});

//my method myEvery construction
Array.prototype.myEvery = function (callback) {
  let output = false;
  const arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      const result = callback(this[i], i, this); // trả về 1 điều kiện và khi đk gán => tự động convert sang kiểu boolean
      if (result) {
        output = true;
      } else {
        output = false;
        break;
      }
    }
  } else {
    const e = new Error("undefined is not a function");
    throw e;
  }
  return output;
};

const everyCourse = ["Javascript", "PHP", "NodeJs", "ReactJS", "Javascript"];
const rsEvery = everyCourse.myEvery(function (item, index, arrayOrigin) {
  console.log(index);
  console.log(arrayOrigin);
  return item == "Javascript";
});
console.log(rsEvery);

// my method mySome() construction

Array.prototype.mySome = function (callback) {
  let output = false;
  const arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      const result = callback(this[i], i, this);
      if (result) {
        output = true;
        break;
      } else {
        output = false;
      }
    }
  } else {
    const e = new Error("undefined is not a function");
    throw e;
  }
  return output;
};

const someCourse = [
  "Javascript",
  "PHP",
  "NodeJs",
  "ReactJS",
  "Javascript",
  undefined,
];
const rsSome = someCourse.mySome(function (item, index, arrayOrigin) {
  console.log(index);
  console.log(arrayOrigin);
  return item == "Javascript";
});
console.log(rsSome);

// my method find() construction

Array.prototype.myFind = function (callback) {
  let output;
  const arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      const result = callback(this[i], i, this);
      if (result) {
        output = this[i];
        break;
      } else {
        output = undefined;
      }
    }
  } else {
    const e = new Error("undefined is not function");
    throw e;
  }
  return output;
};

const findCourse = [
  "Javascript",
  "PHP",
  "NodeJs",
  "ReactJS",
  "Javascript",
  undefined,
];
const rsFind = findCourse.myFind(function (item, index, arrayOrigin) {
  console.log(index);
  console.log(arrayOrigin);
  return item == "NodeJs";
});
console.log(rsFind);

// my method myFilter() construction

Array.prototype.myFilter = function (callback) {
  let output = [];
  const arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      const result = callback(this[i], i, this);
      if (result) {
        output.push(this[i]);
      }
    }
  } else {
    const e = new Error("undefined is not function");
    throw e;
  }
  return output;
};

const filterCourse = [
  "Javascript",
  "PHP",
  "NodeJs",
  "ReactJS",
  "Javascript",
  undefined,
];
const rsFilter = filterCourse.myFilter(function (item, index, arrayOrigin) {
  console.log(index);
  console.log(arrayOrigin);
  return item == "Javascript";
});
console.log(rsFilter);

// my method myMap() construction
Array.prototype.myMap = function (callback) {
  let output = [];
  const arrayLength = this.length;
  if (typeof callback === "function") {
    for (let i = 0; i < arrayLength; i++) {
      const result = callback(this[i], i, this);
      output.push(result);
    }
  } else {
    const e = new Error("undefined is not function");
    throw e;
  }
  return output;
};

const mapCourse = [
  "Javascript",
  "PHP",
  "NodeJs",
  "ReactJS",
  "Javascript",
  undefined,
];

const rsMap = mapCourse.myMap(function (item, index, arrayOrigin) {
  console.log(arrayOrigin);
  return { index, item };
});
console.log(rsMap);

// my method myReduce() construction

Array.prototype.myReduce = function (callback, initialValue = undefined) {
  const arrayLength = this.length;
  let accumulator;
  if (typeof callback === "function") {
    if (initialValue !== undefined) {
      accumulator = initialValue;
      for (let i = 0; i < arrayLength; i++) {
        accumulator = callback(accumulator, this[i], i);
      }
    }
    if (initialValue === undefined) {
      console.log(initialValue);
      accumulator = this[0];
      for (let i = 1; i < arrayLength; i++) {
        accumulator = callback(accumulator, this[i], i);
      }
    }
  } else {
    const e = new Error("undefined is not function");
    throw e;
  }
  return accumulator;
};

const reduceArray = [1, 2, 3, 4, 5];
const rsReduce = reduceArray.myReduce(function (acc, item, index) {
  console.log(item);
  console.log(index);
  return acc + item;
}, 0);

console.log(rsReduce);
