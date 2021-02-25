function getDate(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    console.log(hourNow);
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
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
    document.write('<h2>' + userName + '</h2>')
    return userName;
}
console.log(userName);

function specialMessage(){
    if (userName == 'Skyler'){
        document.write('Happy Trails, Skyler');
    } else {
        document.write('Rise and Climb, ' + userName);
    }
}
specialMessage();
console.log()