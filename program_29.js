// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// enter number
console.log("Enter stake:")
var stake = readlineSync.questionInt()

console.log("Enter goal")
var goal = readlineSync.questionInt()

console.log("Enter trail")
var trail = readlineSync.questionInt()

var wins = 0
var loss = 0

if (stake <= goal) {
    for (var i = 0; i < trail; i++) {
        var cash = stake
        while (cash > 0 && cash < goal) {
            if (Math.random() < 0.5) {
                cash++
            } else {
                cash--
            }
        }

        if (cash == goal) {
            wins++
        }
    }
    loss = trail - wins

    console.log("wins " + wins)
    console.log("loss " + loss)

    var per_wins = (wins/trail)*100
    var per_loss = (loss/trail)*100
    console.log("Percentage of wins: " +per_wins+"%")
    console.log("Percentage of loss: " +per_loss+"%")
    console.log(wins)
}