const  square = document.querySelectorAll('.square')
const  mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelectorAll('#time-lefft')
//let because it's going to change
let score = document.querySelectorAll('#score')

/*remove class div - no div w style on board
using => function removes for each mole on the grid
*/
function randomSquare() {
  squares.forEach(square => {
    className.classList.remove('mole')
  })

//math floor to round down
let randomSquare = squares[Math.floor(Math.random() * 9)]
randomPosition.classList.add('mole')


//assign the id of the randomPosition to hitPosition for us to use later
// this is so when the html id is 4 the hit position is there
hitPosition = randomPosition.id
}

//arrow event listener for each function

square.forEach(id =>{
  id.addEventListener('mouseup', ())

})
