$(document).ready( () => {
let allCards = [
  { front: "What is let?", back: "let gives you access to declared variables that are limited in scope to the block, statement of expression unlike var. In other words, let variables are scoped to the innermost curly brackets { }." },
  { front: "What is const?", back: "Const is another variable declaration that will be used to replace var. const is short for constant meaning these values CAN'T change. const is great because it removes the 'magic number' pattern that we often fall into as developers." },
  { front: "This is the front of the card 3", back: "this is the back of the card 3" }
]



$(document).on('click', '.create', () => {
    event.preventDefault();
    front = document.getElementById('new-front').value
    back = document.getElementById('new-back').value
        console.log(allCards)

    allCards.push({front, back})
    console.log(allCards)
    //debugger
  })

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