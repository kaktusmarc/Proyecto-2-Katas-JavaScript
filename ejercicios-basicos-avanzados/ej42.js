//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.


function swap(array, index1, index2) {
    const temp = array[index1];
    
    array[index1] = array[index2];
    array[index2] = temp;
  
    return array;
  }
  
  const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  console.log(swap(fantasticFour, 0, 2)); 
  console.log(swap(fantasticFour, 1, 3));
  