//*Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(promedio) {
  let suma = 0
  for (let i = 0; i < promedio.length; i++) {
    if (typeof promedio[i] === 'number') {
      suma += promedio[i]
    } else {
      suma += promedio[i].length
    }
  }
  return suma
}

console.log(averageWord(mixedElements))
