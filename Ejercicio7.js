//* Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log('Enhorabuena, el primero es mayor que el segundo')
  } else if (numberOne < numberTwo) {
    console.log('Enhorabuena, el segundo es mayor que el primero')
  } else {
    console.log('Error,ninguno es mayor')
  }
}

sum(3, 6)
sum(2, 2)
sum(23, 6)
sum(4000, 20)
