// Question 01
input = prompt("Enter a character (number or letter):");

if (input >= '0' && input <= '9') {
    console.log("The input is a number.");
} else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
    console.log("The input is an uppercase letter.");
} else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is not a number or letter.");
}

// Question 02
num1 = parseInt(prompt("Enter first integer:"));
num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}

// Question 03
number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Question 04
char = prompt("Enter a character (string of length 1):").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("It is a vowel");  // It's a vowel
} else {
    console.log("Its not a vowel"); // It's not a vowel
}

// Question 05
correctPassword = "12345";  // Store correct password
userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password");
}

// Question 06
var greeting;
var hour = 12;

if (hour < 6) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// Question 07
time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time format");
}
