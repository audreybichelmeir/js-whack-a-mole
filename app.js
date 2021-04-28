const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
//let because it's going to change
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

/*remove class div - no div w style on board
using => function removes for each mole on the grid
*/
function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
//math floor to round down
let randomPosition = square[Math.floor(Math.random() * 9)]
randomPosition.classList.add('mole')
//assign the id of the randomPosition to hitPosition for us to use later
// this is so when the html id is 4 the hit position is there
hitPosition = randomPosition.id
}

//arrow event listener for each function

//mouse up refers to when hit an element
//if the hit with mouse and the id then we will then add a point
square.forEach(id => {
  id.addEventListener('mouseup', () => {
if(id.id === hitPosition){
  result = result + 1
  score.textContent = result
}
})
})


function moveMole(){
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

moveMole()


//out of time game over
function countDown(){

 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime === 0) {
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }
}

let timerId = setInterval(countDown, 1000)
