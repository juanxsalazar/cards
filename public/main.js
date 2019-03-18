let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
let cardSuits = ['♥', '♠', '♦', '♣']
let deck = []

const main = () => {
  buildDeck()
  shuffle()
}

const buildDeck = () => {
  for (let cVal = 0; cVal < cardValues.length; cVal++) {
    for (let cSuit = 0; cSuit < cardSuits.length; cSuit++) {
      deck.push(cardValues[cVal] + cardSuits[cSuit])
    }
  }
}

const shuffle = () => {
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    let posI = deck[i]
    let posJ = deck[j]
    deck[i] = posJ
    deck[j] = posI
  }
}

const drawCard = () => {
  if (deck.length > 0) {
    const yourCard = document.createElement('li')
    yourCard.textContent = deck[0]
    document.querySelector('.visible-hand').appendChild(yourCard)
    deck.splice(0, 1)
  }
  if (deck.length <= 0) {
    document.querySelector('p').classList.remove('cardas')
    document.querySelector('p').textContent = ''
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('#draw-pile').addEventListener('click', drawCard)