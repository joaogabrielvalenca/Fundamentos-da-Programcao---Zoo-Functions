const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName = '') => {
  const employeeObject = {};
  if (employeeName === '') return employeeObject;
  const findEmployeeByName = employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
  if (!findEmployeeByName) {
    return 'Esse nome nao está no banco';
  }
  console.log(findEmployeeByName);
  return findEmployeeByName;
};

getEmployeeByName('Katsu');

module.exports = getEmployeeByName;

// usar um find que procure firstName e lastName e retornar o objeto

//
// Implemente a função getEmployeeByName que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.

// Retorne um objeto vazio caso a função não receba parâmetros;

// Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato:

//   {
//     id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     firstName: 'Nigel',
//     lastName: 'Nelson',
//     managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
//     responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
//   }
// O que será testado:

// A função deve retornar um objeto vazio caso não receba parâmetros;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu primeiro nome como parâmetro;

// A função deve retornar o objeto da pessoa colaboradora caso receba o seu último nome como parâmetro.
