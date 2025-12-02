//For...in: Usa un for...in para imprimir por consola los datos del alienígena.

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
  };
  
  for (const propiedad in alien) {
    console.log(`La propiedad ${propiedad} tiene cómo valor: ${alien[propiedad]}`);
  }
  

