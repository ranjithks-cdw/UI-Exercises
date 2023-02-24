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
cricketTeamPlayers = ["R Sharma","S Dhawan","V Kohli","S Yadhav","MS Dhoni","H Pandya","R Jadeja","R Ashwin","D Chahar","J Bumrah","Y Chahal"];
console.log("Current Team");
console.log(cricketTeamPlayers);

// Removing Injured Player
injuredPlayer = cricketTeamPlayers.shift();
console.log("Injured Player: " + injuredPlayer);
console.log("Remaining Players");
console.log(cricketTeamPlayers);

// Number of players after removing injured players
numberOfPlayers = cricketTeamPlayers.length;
console.log("Number of available players: "+ numberOfPlayers);

// Number of players after adding new player
cricketTeamPlayers.push("R Gaikwad");
console.log("Number of available players: "+ cricketTeamPlayers.length);

// Sorting players
cricketTeamPlayers.sort();
console.log("Sorted Players List:");
console.log(cricketTeamPlayers);

// Assigning Jersey Numbers
playersWithJerseyNumber = {};
cricketTeamPlayers.map(player => playersWithJerseyNumber[player] = Math.floor(Math.random()*100));
console.log("Player Name - Jersey Number");
for(let player in playersWithJerseyNumber)
    console.log(player+" - "+ playersWithJerseyNumber[player]);

// Uppercase Players Data
playersDataForPrintingJersey = {};
for(let player in playersWithJerseyNumber) {
    upperCasePlayer = player.toUpperCase();
    playersDataForPrintingJersey[upperCasePlayer] = playersWithJerseyNumber[player];
}
console.log("Player - Jersey Number");
for(let player in playersDataForPrintingJersey)
    console.log(player+" - "+ playersDataForPrintingJersey[player]);

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
    let year = todayDate.getFullYear();
    let month = todayDate.getMonth();
    let date = todayDate.getDate();
    let formattedDate = date+"/"+month+"/"+year;
    console.log(formattedDate);
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