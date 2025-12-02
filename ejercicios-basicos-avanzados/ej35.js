//Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    const foundMutants = [];
  
    for (const mutant of mutants) {
      if (mutant.power === power) {
        foundMutants.push(mutant.name);
      }
    }
  
    if (foundMutants.length > 0) {
      return `Mutantes con el poder "${power}": ${foundMutants.join(', ')}`;
    } else {
      return `No se encontraron mutantes con el poder "${power}".`;
    }
  }
  
  // Ejemplos de uso:
  console.log(findMutantByPower(mutants, 'telekinesis')); 
  console.log(findMutantByPower(mutants, 'diarrea')); 
  