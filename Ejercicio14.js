//* Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(words) {
  const Count = {}

  words.forEach((word) => {
    if (Count[word]) {
      Count[word]++
    } else {
      Count[word] = 1
    }
  })

  console.log(Count)
}
repeatCounter(counterWords)
