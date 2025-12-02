// 1 Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1; 
  }
  
  const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  

  console.log(findArrayIndex(mainCharacters, "Leia"));        
  console.log(findArrayIndex(mainCharacters, "Anakin"));   
  console.log(findArrayIndex(mainCharacters, "Rey"));         
  console.log(findArrayIndex(mainCharacters, "Marc"));       
  

  // 2 Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
  
    if (index !== -1) {
      array.splice(index, 1); 
    }
  
    return array; 
}
console.log(removeItem([...mainCharacters], "Leia"));
console.log(removeItem([...mainCharacters], "Han Solo"));
console.log(removeItem([...mainCharacters], "Obi-Wan"));
console.log(removeItem([...mainCharacters], "Yoda"));