// let firstCard=11
// let secondCard=10
// let sum=firstCard+secondCard
// let hasBlackJack=false
// let isAlive=true

// if (sum<21){
//     console.log("Do you wanna draw a new card?")
// }
// else if(sum===21){
//     console.log("Wooo!You have got a blackjack!,You Won")
//     hasBlackJack=true
// }
// // else if(sum>21){
// //     console.log("You are out of the game,Tryn Again!") //////////////////YPU CAN USE BOTH THE WAYS i.e..,,ele or else if
// // }
// else{
//     console.log("You are out of the game,Try Again!")
//     isAlive=false
// } 
// console.log(isAlive)



//ANOTHER WAY OF DOING IT////////


let cards = [] //You can also use an array to store the cards. this is an ordered list of items in arrey.
let sum = 0 //This will store the sum of the cards.
let hasBlackJack = false
let isAlive = false
let message = ""
let messageOut = document.getElementById("message1")
let sumOut = document.getElementById("sumTotal")
let cardsOut = document.getElementById("cardsTotal")
let player={
 name:"Mcm",
 money:450
}
let playerTotalCredits = document.getElementById("playerCredits")
playerTotalCredits.textContent = player.name + ": $ " + player.money

console.log(cards) //This will print an empty array [] in the console,as we have not added any cards yet.

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    //if 1-->return 11
    //if 11-13 --> return 10
    //if 2-10 --> return the same number
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
console.log(getRandomCard())

//let sumOut=document.querySelector("#sumTotal")     /////It can also be done like this,using querySelector instead of getElementById.
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function renderGame() {
    sumOut.textContent = "Sum:" + sum
    cardsOut.textContent = "Cards:"
    // By using a for loop......
    for (let i = 0; i < cards.length; i++) {
        cardsOut.textContent += " " + cards[i]
    }
    if (sum <= 20) {
        message = "Do you wanna draw a new card?"
    }
    else if (sum === 21) {
        message = "Wooo!You have got a blackjack!,You Won"
        hasBlackJack = true
    }
    // else if(sum>21){
    //     console.log("You are out of the game,Tryn Again!") //////////////////YPU CAN USE BOTH THE WAYS i.e..,,ele or else if
    // }
    else {
        message = "You are out of the game,Try Again!"
        isAlive = false
    }
    messageOut.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}




