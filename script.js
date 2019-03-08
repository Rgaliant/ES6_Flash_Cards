$(document).ready( () => {
let allCards = [
  { front: "This is the front of the card", back: "this is the back of the card" },
  { front: "This is the front of the card 2", back: "this is the back of the card 2" },
  { front: "This is the front of the card 3", back: "this is the back of the card 3" }
]


$(document).on('click', '.show-card', () => {
  event.preventDefault();
  //debugger
  console.log(allCards)
  randomCard = allCards[Math.floor(Math.random() * allCards.length)]
  $('#card-front').text(randomCard.front)
  $('#card-back').text(randomCard.back)
})

$(document).on('click', '.flippy', ({ target }) => { 
  event.preventDefault();
  card = $(target).parent('.card')
  card.children('.card-body').toggleClass('hide')
})

})