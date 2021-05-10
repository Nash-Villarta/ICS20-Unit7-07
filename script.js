let numbera = 0
let numberb = 0
let counter = 0
let sum = 0
let negative = false

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  numbera = document.getElementById('inputa').value
  numberb = document.getElementById('inputb').value
  numbera = parseInt(numbera)
  numberb = parseInt(numberb)
  negative = false

  if (numbera < 0) {
    negative = !negative
    numbera = Math.abs(numbera)
  }
  if (numberb < 0) {
    negative = !negative
    numberb = Math.abs(numberb)
  }
  for (counter = 0; counter < numbera; counter++) {
    sum = sum + numberb
  }
  if (negative) {
    sum = 0 - sum
  }

  alert(sum)
  //  Reset numbers to do calculations again
  numbera = 0
  numberb = 0
  sum = 0
}
