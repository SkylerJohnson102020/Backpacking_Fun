function getDate(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    console.log(hourNow);
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow >= 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}
document.write(greeting);
console.log(greeting);
}

function getUserName(){
    let userName = prompt('Please Enter your Name: ');
    // document.write('<h2>' + userName + '</h2>')
    return userName;
    console.log(userName);
}

function specialMessage(){
    let userName = getUserName();
    // Add toLowerCase
    console.log(userName);
    if (userName == 'Skyler'){
        document.write('<h2>' + 'Happy Trails, Skyler' + '<h2>');
    } else {
        document.write('<h2>' + 'Rise and Climb, ' + userName + '<h2>');
    }
}
// specialMessage();

// function numberGuessingGame(){
//     // set the correct number
//     // Got random number generator from w3schools
//     let correctAnswer = Math.floor(Math.random() * 100) + 1;
//     console.log(correctAnswer);
//      // I need to set the number of guesses
//      let guesses = 8;
//     // maybe later we can get a random number
//     // I need get a number from the user
//     // check if they have guesses left
//     for(let i = 0; i < guesses; i++){
//         let userAnswer = prompt('Please Enter a number 1-100');
//         while(userAnswer < 1 || userAnswer > 100){
//             userAnswer = prompt('Outside of Range. Please Enter a number 1-100')
//         }

//         // check if the guess is right?
//         if(userAnswer == correctAnswer){
//             alert('Congratulations, Egghead, You got it right!');
//             break;
//         }else if(userAnswer > correctAnswer){
//             alert('Too high! Try Again!')
//         } else if(userAnswer < correctAnswer){
//             alert('Too low! Try Again!')
//         }
//     }

// }

function imageAmount(){
    let userAnswer = prompt('How much do you like the wilderness? Rate 1-5 stars');
    // add prompt and condition value
    for(let i = 0; i < userAnswer; i++){
        document.write('<img class="stars" src= "https://www.how-to-draw-funny-cartoons.com/image-files/vector-star-001.jpg">')
    }

}