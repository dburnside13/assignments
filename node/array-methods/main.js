const readline = require('readline-sync')

const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function foodFunc(vegetables,fruit) {
    vegetables.pop()
    console.log(vegetables)
    
    fruit.shift()
    console.log(fruit)
    
    const orangeArr = fruit.indexOf("orange")
    console.log(orangeArr)
    
    fruit.push("1")
    console.log(fruit)
    
    vegetables.push("3")
    console.log(vegetables)
    
    const foodArr = fruit.concat(vegetables)
    console.log(foodArr)
    
    foodArr.splice(4, 2)
    console.log(foodArr)
    
    foodArr.reverse()
    console.log(foodArr)
    
    let foodStringArr = foodArr.toString()
    return foodStringArr
    }
    console.log(foodFunc(vegetables, fruit))
