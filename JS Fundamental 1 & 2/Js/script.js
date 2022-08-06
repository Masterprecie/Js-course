// Fundamental Task 1

// let country = 'Nigeria'
// let continent = 'Africa'
// let population = '200 million people'
// console.log(country);
// console.log(continent);
// console.log(population);

// Fundamental Task 2

// let isIsland = 'false'
// let language =
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Fundamental Task 3

// language = 'yoruba'
// const isIsland = 'false'
// const country = 'Nigeria'
// const continent = 'Africa'
// country='Biafra'

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Fundamental Task 4

// let population = 200000000/2
// let population = 200000000
// population++;
// let finland= 6000000
// let aCountryAverage = 33000000

// let country = 'Nigeria'
// let continent = 'Africa'
// let population = 20
// let language = 'English'

// console.log(population);
// console.log(finland);
// console.log(population > finland);
// console.log(population < aCountryAverage);

// let description = country + ' is in ' + continent + ' it has'+ ' ' + population + ' ' + 'the dominant language is' + ' ' + language;

// let description = `${country} is in ${continent} it has ${population} the dominant language is ${language}`
// console.log(description);

// Fundamental Task 5

// if (population  > 33 ) {
//    console.log(`${country} is above average `);
// } else{
//    console.log(`${country} is 22 million below average`);
// }


// Fundamental Task 6

// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

// console.log('9' - '5', '19' - '13' + '17', '19' - '13' + 17, '123' < 57, 5 + 6 + '4' + 9 - 4 - 2); 


// Fundamental Task 7

// let numNeighbours = prompt ('How many neighbour countries does your country have? ');

// if (numNeighbours === 1) {
//    console.log( 'Only 1 border!');
// }else if (numNeighbours > 1) {
//    console.log('More than 1 borders');
// } else {
//    console.log('No borders');
// }

 
// console.log(numNeighbours);


// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Solution

// TEST DATA 1
// const johnMass = 78;
// const johnHeight = 1.69;
// const markMass = 92;
// const markHeight = 1.95;

// TEST DATA 2
// const johnMass = 95;
// const johnHeight = 1.88;
// const markMass = 85;
// const markHeight = 1.76;

// const BMIjohn = johnMass/ (johnHeight * johnHeight)
// const BMImark = markMass/ (markHeight * markHeight)
// const markHigherBMI = BMImark > BMIjohn;
// console.log(BMIjohn, BMImark);
// console.log(markHigherBMI);



// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// HINT: Use an if/else statement.

//solution

// if (BMImark > BMIjohn) {
//    console.log(`Mark BMI ${BMImark} is higher than John's  BNI ${BMIjohn}`)
//  } else {
//    console.log(`John BMI ${BMIjohn} is higher than Marks ${BMImark}`)
//  }


// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//Solution

//Test Data 1:
// const teamDolphins = (96 + 108 + 89) / 3;
// const teamKoalas = (60 + 91 + 123)/ 3;

//Test Data Bonus 1:
// const teamDolphins = (97 + 112 + 101) / 3;
// const teamKoalas = (109 + 95 + 123)/ 3;

//Test Data Bonus 1:

// const teamDolphins = (97 + 112 + 101) / 3;
// const teamKoalas = (109 + 95 + 106)/ 3;

// console.log(teamDolphins,teamKoalas);

// if (teamDolphins > teamKoalas) {
//    console.log ('Dolphins wins the trophy')
// } else if (teamKoalas > teamDolphins) {
//    console.log('Koalas wins the trophy');
// } else if (teamKoalas === teamDolphins) {
//    console.log('Both wins the trophy');
// };

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

