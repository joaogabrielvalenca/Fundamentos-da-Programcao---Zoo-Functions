const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal.species) {
    let obj = {};
    species.map((specie) => {
      const { name, residents } = specie;
      const quantity = residents.length;
      obj[name] = quantity;
    });
    console.log(obj);
    return obj;
  }
  const result = species.find((specie) => specie.name === animal.species);
  if (!animal.sex) {
    const numberOfAnimals = result.residents.length;
    console.log(numberOfAnimals);
    return numberOfAnimals;
  }
  const filteredAnimals = result.residents.filter(
    (resident) => resident.sex === animal.sex
  );

  console.log(filteredAnimals.length);
  return filteredAnimals.length;
};

const entryData = { species: "penguins", sex: "male" };

countAnimals(entryData);

module.exports = countAnimals;

//fazer o rest operator no parametro da função. Caso não escrever parametro retornar todas as espécies e a quantidade de residentes (usar o map)
//caso passe só o objeto com { species: 'girraffe' } fazer um filter com o array.length da chave residents
//caso passe o objeto com { species 'giraffes', gender: 'female'} percorrer a chave de residents com um filter






// Implemente a função countAnimals que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.

// A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.

// Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

//   {
//     lions: 4,
//     // [...]
//   }
// Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

// ao receber o argumento { species: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

// ao passar o argumento { species: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

// O que será testado:

// A função countAnimals, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;

// A função countAnimals, caso receba como parâmetro um objeto com a chave species, deve retornar a quantidade de animais daquela espécie;

// A função countAnimals, caso receba como parâmetro um objeto com as chaves species e sex, deve retornar a quantidade de animais daquela espécie, no sexo selecionado.