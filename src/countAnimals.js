const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () => {
  const obj = {};
  species.map((specie) => {
    const { name, residents } = specie;
    const quantity = residents.length;
    obj[name] = quantity;
    return obj;
  });
  return obj;
};

const countAnimals = (animal) => {
  if (!animal) {
    return allAnimals();
  }
  const result = species.find((specie) => specie.name === animal.species);
  if (!animal.sex) {
    const numberOfAnimals = result.residents.length;
    return numberOfAnimals;
  }
  const filteredAnimals = result.residents.filter(
    (resident) => resident.sex === animal.sex,
  );
  return filteredAnimals.length;
};

countAnimals({ species: 'bears', sex: 'male' });

module.exports = countAnimals;
