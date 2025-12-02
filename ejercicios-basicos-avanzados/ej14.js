//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  function repeatCounter(list) {
    const counter = {};
  
    for (let i = 0; i < list.length; i++) {
      const word = list[i];
  
      if (counter[word]) {
        counter[word]++;       
      } else {
        counter[word] = 1;     
      }
    }
  
    return counter;
  }
  
  console.log(repeatCounter(words));
  


