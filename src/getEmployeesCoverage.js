const data = require('../data/zoo_data');

const { employees, species } = data;

const listSpeciesName = (employee) => {
  const list = employee.responsibleFor.map((animalId) => {
    const target = species.find((specie) => specie.id === animalId);
    return target.name;
  });
  return list;
};

const listLocations = (employee) => {
  const list = employee.responsibleFor.map((animalId) => {
    const target = species.find((specie) => specie.id === animalId);
    return target.location;
  });
  return list;
};

const findEmployee = (objEmployees) => {
  const findEmployees = employees.find(
    (employee) =>
      employee.firstName === objEmployees.name
      || employee.lastName === objEmployees.name
      || employee.id === objEmployees.id,
  );
  return findEmployees;
};

const employeesCoverageAll = () => {
  const all = employees.map((employee) => {
    const result = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: listSpeciesName(employee),
      locations: listLocations(employee),
    };
    return result;
  });
  return all;
};

const getEmployeesCoverage = (objEmployees) => {
  if (!objEmployees) {
    return employeesCoverageAll();
  }
  const selectedEmployee = findEmployee(objEmployees);
  if (!selectedEmployee) throw new Error('Informações inválidas');
  const speciesList = listSpeciesName(selectedEmployee);
  const locationList = listLocations(selectedEmployee);

  const result = {
    id: selectedEmployee.id,
    fullName: `${selectedEmployee.firstName} ${selectedEmployee.lastName}`,
    species: speciesList,
    locations: locationList,
  };
  return result;
};

getEmployeesCoverage();

module.exports = getEmployeesCoverage;
