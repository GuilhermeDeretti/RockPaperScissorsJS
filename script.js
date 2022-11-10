// choose how many games you wanna play
var games = prompt("We are playing Rock paper and scissors How many games you wanna play?");
// initialize variables User/IA/draw/win/lost
var userChoice;
var robotChoice;
var victory = 0;
var lost = 0;
var drawn = 0;
// set array choices
var choices = ['R','P','S'];
// start loop witch number of games

for(var i = 0; i < games; i++){
//     random IA choice
    robotChoice = choices[Math.floor(Math.random() * choices.length)];
//     get user choice
    userChoice = prompt("choose R for rock, P for paper or S for scissors.")
    switch(userChoice){
        case 'R':
            if (robotChoice = 'S'){
                alert("Robot choose Scissors You Win!");
                victory ++;
                break;
            }else if(robotChoice = 'P'){
                alert("Robot choose Paper you Loose!");
                lost ++;
                break;
            }else{
                alert("Robot choose Rock you Drawn!");
                drawn ++;
                break;
            }
        case 'P':
            if (robotChoice = 'R'){
                alert("Robot choose Rock you Win!");
                victory ++;
                break;
            }else if(robotChoice = 'S'){
                alert("Robot choose Scissors You Loose!");
                lost ++;
                break;
            }else{
                alert("Robot choose Paper you Drawn!");
                drawn ++;
                break;
            }
        case 'S':
            if (robotChoice = 'P'){
                alert("Robot choose Paper You Win!");
                victory ++;
                break;
            }else if(robotChoice = 'R'){
                alert("Robot choose Rock you Loose!");
                lost ++;
                break;
            }else{
                alert("Robot choose Scissors you Loose!");
                drawn ++;
                break;
            }
        default:
            alert("you choose a invalid RPC");                     
    }
}

alert("Result: " + "\n Victorys: " + victory + "\n Lost: " + lost + "\n Drawn: " +drawn);