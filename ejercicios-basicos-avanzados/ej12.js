//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

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
  ];
  
  function removeDuplicates(list) {
    const unicos = [];
  
    for (let i = 0; i < list.length; i++) {
      if (!unicos.includes(list[i])) {
        unicos.push(list[i]);
      }
    }
  
    return unicos;
  }
  
  console.log(removeDuplicates(duplicates));
  