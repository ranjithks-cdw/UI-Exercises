// Section 1: Play With Variables
console.log(1+2);
console.log("apple" + "orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0 == false);
console.log(1===true);
console.log(2=='2');

// Section 2: Play With Arrays
// Initial Cricket Team
let cricketTeamPlayers = ["R Sharma","S Dhawan","V Kohli","S Yadhav","MS Dhoni","H Pandya","R Jadeja","R Ashwin","D Chahar","J Bumrah","Y Chahal"];
console.log("Current Team: \n"+ cricketTeamPlayers);

// Removing Injured Player
let injuredPlayer = cricketTeamPlayers.shift();
console.log("Injured Player: " + injuredPlayer);
console.log("Remaining Players: \n"+ cricketTeamPlayers);

// Number of players after removing injured players
let numberOfPlayers = cricketTeamPlayers.length;
console.log("Number of available players: "+ numberOfPlayers);

// Number of players after adding new player
cricketTeamPlayers.push("R Gaikwad");
console.log("Number of available players: "+ cricketTeamPlayers.length);

// Sorting players
cricketTeamPlayers.sort();
console.log("Sorted Players List: \n"+ cricketTeamPlayers);

// Assigning Jersey Numbers
cricketTeamPlayers = cricketTeamPlayers.map(player => player + " - " + Math.floor(Math.random()*100));
console.log("Player Name - Jersey Number");
for(let player of cricketTeamPlayers)
    console.log(player);

// Uppercase Players Data
let playersDataForPrintingJersey = [];
for(let player of cricketTeamPlayers) {
    let playerDetail = player.split(" - ");
    playerDetail = playerDetail[0].toUpperCase() +" - "+playerDetail[1];
    playersDataForPrintingJersey.push(playerDetail);
}
console.log("Player - Jersey Number");
for(let player of playersDataForPrintingJersey)
    console.log(player);

// Section 3: Play With Functions
// Display numbers from 1 to 100
function numbersFromOneToHundred() {
    for(let i=1; i<101; i++)
        console.log(i);
}
numbersFromOneToHundred();

// Display Date
function displayDate() {
    let todayDate = new Date();
    console.log(todayDate.toLocaleDateString());
}
displayDate();

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius*1.8)+32;
}
let celsius = 40;
console.log("Celsius = "+celsius);
console.log("Fahrenheit = "+celsiusToFahrenheit(celsius));

// Average of given numbers
function averageOfGivenNumbers(...numbers) {
    let sum = 0;
    for(let number of numbers)
        sum += number;
    return sum/numbers.length;
}
console.log(averageOfGivenNumbers(1,11,22,3,55,33));
console.log(averageOfGivenNumbers(5,2));

// Reverse string
function reverseString(stringToReverse) {
    let reversedString = "";
    for(let i=stringToReverse.length-1; i>-1;i--)
        reversedString += stringToReverse[i];
    return reversedString;
}
console.log(reverseString("Sirius"));