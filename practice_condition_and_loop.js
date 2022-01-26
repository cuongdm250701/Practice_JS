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
