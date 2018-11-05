// This is our list of 52 cards
let deck = [
  { face: '2', value: 2, suit: 'spades' },
  { face: '3', value: 3, suit: 'spades' },
  { face: '4', value: 4, suit: 'spades' },
  { face: '5', value: 5, suit: 'spades' },
  { face: '6', value: 6, suit: 'spades' },
  { face: '7', value: 7, suit: 'spades' },
  { face: '8', value: 8, suit: 'spades' },
  { face: '9', value: 9, suit: 'spades' },
  { face: '10', value: 10, suit: 'spades' },
  { face: 'jack', value: 10, suit: 'spades' },
  { face: 'queen', value: 10, suit: 'spades' },
  { face: 'king', value: 10, suit: 'spades' },
  { face: 'ace', value: 11, suit: 'spades' },
  { face: '2', value: 2, suit: 'hearts' },
  { face: '3', value: 3, suit: 'hearts' },
  { face: '4', value: 4, suit: 'hearts' },
  { face: '5', value: 5, suit: 'hearts' },
  { face: '6', value: 6, suit: 'hearts' },
  { face: '7', value: 7, suit: 'hearts' },
  { face: '8', value: 8, suit: 'hearts' },
  { face: '9', value: 9, suit: 'hearts' },
  { face: '10', value: 10, suit: 'hearts' },
  { face: 'jack', value: 10, suit: 'hearts' },
  { face: 'queen', value: 10, suit: 'hearts' },
  { face: 'king', value: 10, suit: 'hearts' },
  { face: 'ace', value: 11, suit: 'hearts' },
  { face: '2', value: 2, suit: 'clubs' },
  { face: '3', value: 3, suit: 'clubs' },
  { face: '4', value: 4, suit: 'clubs' },
  { face: '5', value: 5, suit: 'clubs' },
  { face: '6', value: 6, suit: 'clubs' },
  { face: '7', value: 7, suit: 'clubs' },
  { face: '8', value: 8, suit: 'clubs' },
  { face: '9', value: 9, suit: 'clubs' },
  { face: '10', value: 10, suit: 'clubs' },
  { face: 'jack', value: 10, suit: 'clubs' },
  { face: 'queen', value: 10, suit: 'clubs' },
  { face: 'king', value: 10, suit: 'clubs' },
  { face: 'ace', value: 11, suit: 'clubs' },
  { face: '2', value: 2, suit: 'diamonds' },
  { face: '3', value: 3, suit: 'diamonds' },
  { face: '4', value: 4, suit: 'diamonds' },
  { face: '5', value: 5, suit: 'diamonds' },
  { face: '6', value: 6, suit: 'diamonds' },
  { face: '7', value: 7, suit: 'diamonds' },
  { face: '8', value: 8, suit: 'diamonds' },
  { face: '9', value: 9, suit: 'diamonds' },
  { face: '10', value: 10, suit: 'diamonds' },
  { face: 'jack', value: 10, suit: 'diamonds' },
  { face: 'queen', value: 10, suit: 'diamonds' },
  { face: 'king', value: 10, suit: 'diamonds' },
  { face: 'ace', value: 11, suit: 'diamonds' }
]

// This code will build the deck dynamically
//
// // This will eventually be our deck of 52 cards
// let deck = []
//
// // A list of all the suits we have
// let suits = ['spades', 'hearts', 'clubs', 'diamonds']
//
// // The 13 cards that are in each suit
// let cards = [
//   { face: '2', value: 2 },
//   { face: '3', value: 3 },
//   { face: '4', value: 4 },
//   { face: '5', value: 5 },
//   { face: '6', value: 6 },
//   { face: '7', value: 7 },
//   { face: '8', value: 8 },
//   { face: '9', value: 9 },
//   { face: '10', value: 10 },
//   { face: 'jack', value: 10 },
//   { face: 'queen', value: 10 },
//   { face: 'king', value: 10 },
//   { face: 'ace', value: 11 }
// ]
//
// for (let index = 0; index < suits.length; index++) {
//   for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
//     deck.push({
//       face: cards[cardIndex].face,
//       value: cards[cardIndex].value,
//       suit: suits[index]
//     })
//   }
// }

// This array will store the player's hand
let playerHand = []

// This array will store the dealer's hand
let dealerHand = []

const dealCardToPlayer = () => {
  let playerHandList = document.querySelector('.player-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = deck.pop()

  playerHand.push(card)

  // Experiment
  // let playerHandTotal = playerHand[0] + playerHand[1]
  // console.log(playerHandTotal)

  // Add this card to the user interface

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  playerHandList.appendChild(newCardItem)
}
const dealCardToDealer = () => {
  let dealerHandList = document.querySelector('.dealer-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = deck.pop()

  dealerHand.push(card)

  // Add this card to the user interface

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  dealerHandList.appendChild(newCardItem)
}

const main = () => {
  // Shuffle the deck into a random order
  //
  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = deck[index]
    let secondCard = deck[otherIndex]

    deck[index] = secondCard
    deck[otherIndex] = firstCard
  }

  for (let count = 0; count < 2; count++) {
    dealCardToPlayer()
  }

  // Find the hit button
  let hitButton = document.querySelector('.hit')
  // Add an event listener on 'click' that does:
  hitButton.addEventListener('click', dealCardToPlayer)

  console.log(playerHand)
  console.log(deck)

  // For loop for dealer
  for (let count = 0; count < 2; count++) {
    dealCardToDealer()
  }
  // Event listener for dealer
  hitButton.addEventListener('click', dealCardToDealer)

  console.log(dealerHand)
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', main)
// -------------------------------------------------
//            INCLUDED BY INSTRUCTOR:
// The deck of cards array has been provided

// A main section has ben provided. It includes:

// -Includes a shuffle for loop.

// -Includes a dealCardToPlayer for loop.
// -Includes a let hitButton = document.querySelector('.hit') button
// -Includes a hitButton.addEventListener('click', dealCardToPlayer) function.
// -It tests whats inside of console.log(playerHand)
// -It tests whats inside of console.log(deck)

// -Includes a dealCardToDealer for loop.
// -It does NOT include a let hitButton = document.querySelector('.hit') button or ('.stay') button
// -It includes a hitButton.addEventListener('click', dealCardToPlayer) function.
// -It tests whats inside of console.log(dealerHand)
// -It tests whats inside of console.log(deck)
// -------------------------------------------------
//              I NEED TO ADD:
// A section (or Li) for classes: player hand, player total, hit button
// -Find the ul classes and buttons
// -Adding images to player hand. Card images have been provided and are stored.
// -Every time someone clicks on hit we need to add the value of the cards.
// ---A for loop on how to get card value for playerHand
// -Add an eventlistener when clicks happen(this one had been included)
// A Return function (return playerTotal) to display total

// A section (or Li) for classes: dealer hand, dealer total, stay button
// -Find the ul classes and buttons
// -Adding images to dealer hand. Ive downloaded a back of card image for hidden dealer hand.
// -Every time someone clicks on hit we need to add the value of the cards.
// ---A for loop on how to get card value for dealerHand
// -Add an eventlistener when clicks happen
// A Return function (return dealerTotal) to display total
// since I want to use images id like to use the hidden function

// A section for classes: game results(whoWins) and restart button
// --------------------------------------------------
//            INSTRUCTIONS IN ENGLISH:
// Start with a deck of cards
// Have the ability to shuffle cards
// Deal the cards to both player and dealer
// The objective is to get as close to 21 total value in hand
//  -without going over (bust)
// If your total hand value is higher than the dealers after you stay you win
// You can continue to hit until you get 21 or bust
// Dealer stays when he reaches 17
// the dealer will reveal his cards once you stay
// If the dealer's value is higher dealer wins
// Start a new hand to continue playing
