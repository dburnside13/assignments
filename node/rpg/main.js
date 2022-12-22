const { keyIn } = require("readline-sync")
const readline = require("readline-sync")
const welcome = console.log("-_-_-_-_- Welcome to the COLOSSAL ADVENTURE RPG! -_-_-_-_-")
const nameQ = readline.question("-_-_-_-_- What is Your Name? -_-_-_-_-")

var spider = {
    health: 10 ,
    name: "hairy spider"
}
var goblin = {
    health: 25 ,
    name: "jacked goblin"
}
var troll = {
    health: 50 , 
    name: "oddly short troll"
}
var enemys = [spider, goblin, troll]
var enemy = ""

var nameSave = nameQ

var player = {name: nameSave, health: 50, gold: 10, weapon: "dagger"}
    const prompt = readline.keyIn("-_-_-_-_- "+ nameSave + ", you awake to find yourself in a dungeon. Your chains are unlocked, a dagger is on the floor beside you and your cell door is open for you to leave...or so it seems. (g)rab the dagger. -_-_-_-_-")
    console.log("-_-_-_-_- You pick the dagger off the floor and head to the door. -_-_-_-_- ")   
    
    while (player.health > 0) {
    var prompt3 = readline.keyIn("-_-_-_-_- You stand before the open door ready to walk out. (w)alk or check your (i)nventory. -_-_-_-_-")
    switch (prompt3){
        case 'w': 
            if (randoNum(1, 6) > 3) {
                enemySpawn()
            } else {
                console.log("-_-_-_-_- You walk thru the long hallway seemingly the only person around. Keep (w)alking or check your (i)nventory. -_-_-_-_-")
            }
            break
        case 'i': 
        console.log(player)
        break
    }
}

function randoNum(min, max) {
    return Math.floor((Math.random() * max )+ min)
}
function enemySpawn() {
    let randomEnemy = Math.floor((Math.random() * 3))
    var enemy 
    if (randomEnemy === 0) {
     enemy = spider
    } else if (randomEnemy === 1) {
     enemy = goblin
    } else if (randomEnemy === 2) {
     enemy = troll
    }
    combat(enemy)
}
function combat(enemy) {
    let inCombat = true 
    var prompt = console.log("-_-_-_-_- A wild "+enemy.name +" has appeared-_-_-_-_-")

    while (inCombat ) {
        var combatPrompt = readline.keyIn("-_-_-_-_- (a)ttack or try and (r)un away -_-_-_-_-")
        switch (combatPrompt) {
            case 'a':
                enemy.health = enemy.health - randoNum(2, 11)
                player.health = player.health - randoNum(2, 11)
                console.log("-_-_-_-_- You and the enemy trade blows as if it was a game -_-_-_-_-")
                if (player.health <= 0) {
                    console.log ("-_-_-_-_-_ You have Died (RIP) _-_-_-_-_-")
                    inCombat = false 
                }
                if (enemy.health <= 0) {
                    console.log("-_-_-_-_- The Enenmy Has Been Defeated. (Gold Acquired) -_-_-_-_-")
                    player.gold = player.gold + randoNum(2, 8)
                    inCombat = false
                }
            break 
            case 'r':
                 
                if (randoNum(1, 2) === 1) {
                    console.log("-_-_-_-_- You have escaped. -_-_-_-_-")
                    inCombat = false

                } else {
                    console.log("-_-_-_-_- You were not able to escape. -_-_-_-_-")
                }
            break 
            default:
                console.log("-_-_-_-_- Please select one of the listed Actions only! -_-_-_-_-")
        }
    }
}


