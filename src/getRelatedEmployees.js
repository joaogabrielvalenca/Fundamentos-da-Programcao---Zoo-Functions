const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => {
  const lisfOfManagers = [];
  employees.map((employee) => {
    employee.managers.map((manager) => lisfOfManagers.push(manager));
    return lisfOfManagers;
  });

  const checkIsManager = lisfOfManagers.some((manager) => manager === id);
  return checkIsManager;
};

const getRelatedEmployees = (managerId) => {
  console.log(managerId);
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployees = [];
  employees.map((employee) => {
    if (employee.managers.find((manager) => manager === managerId)) {
      relatedEmployees.push(`${employee.firstName} ${employee.lastName}`);
    }
    return relatedEmployees;
  });
  console.log(relatedEmployees);
  return relatedEmployees;
};

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = { isManager, getRelatedEmployees };

// para o isManager podemos só comparar se o id for diferente de burlId, stephanieId e olaId dizer que é false, else true

// para a segunda função podemos usar o find primeiro. Caso não dê certo usar o filter

// Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
// A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

// Deve retornar true se o id passado for de uma pessoa gerente;
// Deve retornar false se o id passado não for de uma pessoa gerente.
// A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

// Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

// Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
// Exemplo de output:

// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
// Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
// Para lançar o erro, você vai utilizar a função construtora Error da biblioteca padrão do JavaScript.

// Exemplo:

// throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
// Você pode ler mais sobre a função construtora Error, neste link.

// O que será testado:

// A função isManager deve retornar true se o ID passado for de uma pessoa gerente;

// A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;

// A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

// A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
