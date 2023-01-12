const data = require('../data/zoo_data');

const { employees, species } = data;

const getSelectedEmployee = (id) => {
  const selectedEmployees = employees.find((employee) => employee.id === id);
  return selectedEmployees;
};

const findSpecie = (employee) => {
  const specie = species.find(
    (especie) => especie.id === employee.responsibleFor[0],
  );
  return specie;
};

const findTheOldestFromSpecie = (specie) => {
  let oldestFromSpecie = specie.residents[0];
  specie.residents.map((resident) => {
    if (resident.age >= oldestFromSpecie.age) {
      oldestFromSpecie = resident;
    }
    return oldestFromSpecie;
  });
  return oldestFromSpecie;
};

const getOldestFromFirstSpecies = (id) => {
  const selectedEmployee = getSelectedEmployee(id);

  const specie = findSpecie(selectedEmployee);
  const oldestFromSpecie = findTheOldestFromSpecie(specie);
  const formatedResult = [];
  formatedResult.push(
    oldestFromSpecie.name,
    oldestFromSpecie.sex,
    oldestFromSpecie.age,
  );

  return formatedResult;
};

module.exports = getOldestFromFirstSpecies;
