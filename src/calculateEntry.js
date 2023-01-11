const data = require("../data/zoo_data");

const { prices } = data;

const countEntrants = (entrants = []) => {
  console.log("entrants", entrants);
  const objEntrants = {};
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.map((entrant) => {
    if (entrant.age < 18) {
      objEntrants["child"] = child = child + 1;
      objEntrants["adult"] = adult;
      objEntrants["senior"] = senior;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      objEntrants["child"] = child;
      objEntrants["adult"] = adult = adult + 1;
      objEntrants["senior"] = senior;
    }
    if (entrant.age >= 50) {
      objEntrants["child"] = child;
      objEntrants["adult"] = adult;
      objEntrants["senior"] = senior = senior + 1;
    }
  });
  return objEntrants;
};

const calculateEntry = (entrants = []) => {
  if (JSON.stringify(entrants) === "{}" || entrants.length === 0) return 0;

  const countPeople = countEntrants(entrants);
  const { adult, child, senior } = countPeople;
  const moneyEarned =
    child * prices.child + adult * prices.adult + senior * prices.senior;
  const total = Number((Math.round(moneyEarned * 100) / 100).toFixed(2));

  return total;
};

const entrants = [
  { name: "Lara Carvalho", age: 5 },
  { name: "Frederico Moreira", age: 5 },
  { name: "Pedro Henrique Carvalho", age: 5 },
  { name: "Maria Costa", age: 18 },
  { name: "Maria AAAA", age: 18 },
  { name: "Carlos Nogueira", age: 50 },
];

calculateEntry();

module.exports = { calculateEntry, countEntrants };

// 8. Implemente a função calculateEntry.
// Calcule o valor total da entrada dos visitantes do zoológico.

// O valor das entradas do zoológico é calculado a partir da faixa etária, onde:

// child: são pessoas menores de 18 anos;

// adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;

// senior: são pessoas com idade maior ou igual a 50 anos.

// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções, chamadas de countEntrants e calculateEntry.

// As duas funções recebem um array no seguinte formato:

// const entrants = [
// 	{ name:  'Lara Carvalho', age:  5 },
// 	{ name:  'Frederico Moreira', age:  5 },
// 	{ name:  'Pedro Henrique Carvalho', age:  5 },
// 	{ name:  'Maria Costa', age:  18 },
// 	{ name:  'Núbia Souza', age:  18 },
// 	{ name:  'Carlos Nogueira', age:  50 },
// ];
// A função countEntrants será responsável por calcular a quantidade de visitantes por faixa etária:
// Ela recebe um array e deve retornar um objeto. Para isso:

// Realize a soma da quantidade de visitantes por faixa etária;

// Retorne um objeto em um formato como esse: { child: 3, adult: 2, senior: 1 }.

// A função calculateEntry será responsável por somar o valor da entrada das pessoas no zoológico:
// Ela recebe um array e deve retornar a soma total dos valores do ingresso. Para isso:

// Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;

// Utilize a função countEntrants para ter a quantidade total de pessoas por faixa etária;

// Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.

// De olho na dica eyes: O valor a ser cobrado pela faixa de idades também consta no arquivo de dados.

// Exemplo de uso da função calculateEntry:

// calculateEntry(entrants);
// Saída:

// 187.94
// Atenção warning: A função calculateEntry é responsável por retornar um valor monetário. É necessário fazer o tratamento adequado para que o valor final não possua mais de duas casas decimais.

// 187.94 white_check_mark Correto
// 187.94000000000003 x Incorreto

// O que será testado:

// A função countEntrants:

// Ao receber um array de visitantes, retorna um objeto com a contagem.
// A função calculateEntry:

// Retorna 0 se nenhum argumento for passado;

// Retorna 0 se um objeto vazio for passado;

// Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;

// Ao receber um array com 1 pessoa adulta retorna o valor correto;

// Ao receber um array com 1 pessoa mais velha retorna o valor correto;

// Ao receber um array com 1 criança retorna o valor correto;

// Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto
