const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((currentSpecies) => currentSpecies.name === 'elephants');
//função para achar os elefantes e trabalhar com o valor
const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
//função para calcular a média de idade
const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  console.log(computeData('names', elephants))
  return computeData(param, elephants);
};

handlerElephants('names')

module.exports = handlerElephants;
