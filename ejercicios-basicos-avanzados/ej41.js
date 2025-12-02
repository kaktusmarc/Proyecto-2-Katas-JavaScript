//Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

function rollDice(sides) {
    // Genera un número aleatorio entre 1 y el número de caras
    return Math.floor(Math.random() * sides) + 1;
  }
  
  console.log(rollDice(6));  

