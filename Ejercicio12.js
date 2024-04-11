//*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
//!pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(food) {
  for (let i = 0; i < food.length; i++) {
    const words = food[i]
    for (let j = i + 1; j < food.length; j++) {
      const letter = food[j]
      if (letter === words) {
        food.splice(i, 1)
      }
    }
  }
  console.log(food)
}
removeDuplicates(duplicates)
