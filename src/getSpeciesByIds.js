// const data = require("../data/zoo_data");

// const { species } = data;

// const getSpeciesByIds = (...ids) => {
//   let newIds = [...ids]
//   const items = newIds.map(id => {
//     if (newIds = '') return []
//     const specie = species.find((item) => item.id === id);

//     return specie.name;
//   });
//   console.log(items);
//   return items;
// };

// const ids = ["0938aa23-f153-4937-9f88-4858b24d6bce", "0938aa23-f153-4937-9f88-4858b24d6bce"]

// getSpeciesByIds(ids);

const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  const items = ids.map((id) => {
    const specie = species.find((item) => item.id === id);
    return specie;
  });
  console.log(items);
  return items;
};

getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46');

module.exports = getSpeciesByIds;

// fazer rest para os parametros da função. Passar um map para retornar os valores????

// Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.

// Faça com que a função getSpeciesByIds possa receber vários parâmetros;

// Retorne um array vazio se a função não receber um id;

// Retorne as seguintes informações do arquivo data:

// Se a função receber apenas um id, retorne a espécie do animal referente a este id;

// Se a função receber vários ids, retorne todas as espécies referente a esses ids.

// O que será testado:

// A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;

// A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;

// A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs.
