const readline = require("readline-sync");
const name = readline.question("What is your name? ");

//Game is running
var isGameRunning = true
//Start with no key
var key = 0

//What to do while game is running
while (isGameRunning) {
    game()
}

//The game function
function game () {
    let options = readline.keyIn("What would you like to do? Put hand in the (h)ole in the door, (s)earch the room, or try an (o)pen the Door.")
  //swapping bewteen the 3 options depending on key input
    switch (options) {
        //pressing h takes you to defeat function
        case 'h':
            defeat()
        break
       //if its the first time pressing s then the key var will be changed to 1
        case 's':
            if ((key === 0)) {
                console.log("you found the KEY!")
                key = 1
            } else  {
                console.log("you already have the KEY.")
            }
        break
        //if pressing o with a key = 1 the key will be "used" and reset to 1 and victory function will run
        case 'o':
            if ((key === 0)) {
                console.log("the door is locked, find the key")
            } else {((key === 1)) 
                key = 0
                victory()
            }
        break
        //remind people to choose a valid option when the dont press one of the defined keys
        default:
            console.log("please select a valid option!")
            
    } 
    
}
 //the function for a victory
function victory () {
    let repeat = readline.keyIn("Congrats! you Escaped. would you like to play again? (y)es or (n)o?")
    switch(repeat) {
        //press y to run game function again
        case 'y':
            game()
            key = 0
        break
        //press n to end 
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
    }   
}
//this function is for a defeat
function defeat () {
    let repeat = readline.keyIn("YOU DIED, would you like to try again? (y)es or (n)o?")
    switch(repeat) {
        //press y to run game function again
        case 'y':
            game()
            key = 0
        break
        //press n to end
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
    }
    
}