const readline = require("readline-sync");
const name = readline.question("What is your name? ");

var isGameRunning = true
var key = 0

while (isGameRunning) {
    game()
}

function game () {
    let options = readline.keyIn("What would you like to do? Put hand in the (h)ole in the door, (s)earch the room, or try an (o)pen the Door.")
  
    switch (options) {
        case 'h':
            defeat()
        break
        case 's':
            if ((key === 0)) {
                console.log("you found the KEY!")
                key = 1
            } else  {
                console.log("you already have the KEY.")
            }
        break
        case 'o':
            if ((key === 0)) {
                console.log("the door is locked, find the key")
            } else if ((key === 1)) {
                key = 0
                victory()
            
            }
        break
        default:
            console.log("please select a valid option!")
            
    } 
    
}
 
function victory () {
    let repeat = readline.keyIn("Congrats! you Escaped. would you like to play again? (y)es or (n)o?")
    switch(repeat) {
        case 'y':
            game()
            key = 0
        break
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
        default: 
        console.log("Please select (y)es or (n)o.")
        victory()
        break
    }   
}
function defeat () {
    let repeat = readline.keyIn("YOU DIED, would you like to try again? (y)es or (n)o?")
    switch(repeat) {
        case 'y':
            game()
            key = 0
        break
        case 'n':
            console.log("GAME OVER")
            isGameRunning = false
        break
        default:
            console.log("please select (y)es or (n)o.")
            defeat()
        break
    }
    
}