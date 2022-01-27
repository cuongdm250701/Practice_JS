// 1. Write a JavaScript program that accept two integers and display the larger.

twoIntegers = (number1, number2) => {
  if (Number.isInteger(number1) && Number.isInteger(number2)) {
    if (number1 >= number2) {
      console.log(number1);
    } else {
      console.log(number2);
    }
  }
};
twoIntegers(3, 4);

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
sortThreeNumber = (number1, number2, number3) => {
  if (number1 >= number2 && number1 >= number3) {
    if (number2 >= number3) {
      console.log(number1, number2, number3);
    } else {
      console.log(number1, number3, number2);
    }
  }

  if (number2 >= number1 && number2 >= number3) {
    if (number1 >= number3) {
      console.log(number2, number1, number3);
    } else {
      console.log(number2, number3, number2);
    }
  }

  if (number3 >= number1 && number3 >= number2) {
    if (number1 >= number2) {
      console.log(number3, number1, number2);
    } else {
      console.log(number3, number2, number1);
    }
  }
};
sortThreeNumber(0, -1, 4);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
findMaxNumber = (input) => {
  const arrayNum = input.split(", ");
  let max = arrayNum[0];
  for (let i = 1; i < arrayNum.length - 1; i++) {
    if (arrayNum[i] >= max) {
      max = arrayNum[i];
    }
  }
  console.log(max);
};
findMaxNumber("-5, -2, -6, 0, -1");

// 5. Write a JavaScript for loop that will iterate from 0 to 5. For each iteration, it will check if the current number is odd or even, and display a message to the screen
loopNumber = (input) => {
  const arrayNum = input.split(",");
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 == 0) {
      console.log(`${arrayNum[i]}  is even`);
    } else {
      console.log(`${arrayNum[i]}  is odd`);
    }
  }
};

loopNumber("0,1,2,3,4");

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
chartPain1 = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};
chartPain();

chartPain2 = () => {
  let result = "";
  for (i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
};
chartPain2();

chartPain3 = () => {
  let result = "";
  for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 5; j++) {
      if (j < i) {
        result += " ";
      } else {
        result += "*";
      }
    }
    result += "\n";
  }
  console.log(result);
};
chartPain3();

chartPain4 = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (j < i) {
        result += " ";
      } else {
        result += "*";
      }
    }
    result += "\n";
  }
  console.log(result);
};
chartPain4();

chartPain5 = () => {
  let result = "";
  let increase = 0;
  for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= 4; j++) {
      if (j == i) {
        result += "*";
        break;
      } else {
        result += " ";
      }
    }
    for (let k = 1; k <= increase; k++) {
      result += "*";
    }
    increase += 2;
    result += "\n";
  }
  console.log(result);
};
chartPain5();

chartPain6 = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (i == 1 || i == 5) {
        result += "* ";
      } else if (j == 1 || j == 5) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\n";
  }
  console.log(result);
};
chartPain6();

chartPain7 = () => {
  let result = "";
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {
      if (i == 1 || i == 7) {
        result += "* ";
      } else if (j == i) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\n";
  }
  console.log(result);
};
chartPain7();

chartPain8 = () => {
  let result = "";
  for (let i = 7; i >= 1; i--) {
    for (let j = 1; j <= 7; j++) {
      if (i == 7 || i == 1) {
        result += "* ";
      } else if (j == i) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\n";
  }
  console.log(result);
};
chartPain8();

chartPain9 = () => {
  let result = "";
  let increase = 0;
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 7; j++) {
      if (i == 1) {
        result += "* ";
      } else if (j == i || j == 7 - increase) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    increase += 1;

    result += "\n";
  }
  let decrease = 2;
  for (let i = 3; i >= 1; i--) {
    for (let j = 1; j <= 7; j++) {
      if (i == 1) {
        result += "* ";
      } else if (j == i || j == 7 - decrease) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    decrease -= 1;
    result += "\n";
  }
  console.log(result);
};
chartPain9();

chartPain10 = () => {
  let result = "";
  let increase = 0;
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 7; j++) {
      if (i == 1) {
        result += "* ";
      } else if (j == 1 || j == i || j == 7 - increase || j == 7) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\n";
    increase += 1;
  }
  let decrease = 2;
  for (let i = 3; i >= 1; i--) {
    for (let j = 1; j <= 7; j++) {
      if (i == 1) {
        result += "* ";
      } else if (j == 1 || j == i || j == 7 - decrease || j == 7) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
    result += "\n";
    decrease -= 1;
  }
  console.log(result);
};
chartPain10();

chartPain11 = () => {
  let result = "";
  let increase = 0;
  for (let i = 6; i >= 1; i--) {
    for (let j = 1; j <= 6; j++) {
      if (j == i) {
        result += "* ";
        break;
      } else {
        result += "  ";
      }
    }
    for (let k = 1; k <= increase; k++) {
      result += "* ";
    }
    result += "\n";
    increase += 2;
  }
  decrease = 8; // max (do rong) - 3
  for (let i = 2; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      if (j == i) {
        result += "* ";
        break;
      } else {
        result += "  ";
      }
    }
    for (let k = 1; k <= decrease; k++) {
      result += "* ";
    }
    result += "\n";
    decrease -= 2;
  }
  console.log(result);
};
chartPain11();
